import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  public token: string | null = null;

  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService,
    private cookieService: CookieService
  ) {
    this.token = this.loadToken();
  }

  public login(credentials: any): Observable<boolean> {
    return this.http
      .post<string>(environment.api + 'sessions', credentials)
      .pipe(
        tap((token) => (this.token = token)),
        tap((token) => {
          if (credentials.remember) {
            this.saveToken(token, 30); // set expiry to 30 days
            console.log('token - 30 days');
          } else {
            this.saveToken(token); // use default expiry (session)
            console.log('token - session');
          }
        }),
        map((token) => true),
        catchError(() => of(false))
      );
  }

  public logout(): void {
    this.token = null;
    this.cookieService.delete('token');
    this.cookieService.deleteAll(); //delete('token');
    console.log('logged out');
    console.log('cookieService: ' + this.cookieService.get('token'));
  }

  public get authenticated(): boolean {
    return !!this.token && !this.jwt.isTokenExpired(this.token);
  }

  private saveToken(token: string, expiryDays: number = null): void {
    if (expiryDays) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + expiryDays);
      this.cookieService.set('token', token, expiryDate, '/');
    } else {
      this.cookieService.set('token', token);
    }
  }

  private loadToken(): string | null {
    return this.cookieService.get('token');
  }
}

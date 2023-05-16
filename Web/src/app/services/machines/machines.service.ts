import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Machine } from 'src/app/models/machine.model';
import { MachineName } from 'src/app/models/names.model';

import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  constructor(private http: HttpClient, private sessions: SessionsService) {}

  url: string = environment.apiEndpoint + 'Machines';

  public findAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.url + '?limit=15', this.options);
  }

  public findById(id: number): Observable<Machine> {
    return this.http.get<Machine>(this.url + '/' + id, this.options);
  }

  public insert(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.url, machine, this.options);
  }

  public update(machine: Machine): Observable<Machine> {
    console.log('update machine: ', JSON.stringify(machine));
    return this.http.put<Machine>(
      this.url + '/' + machine.id,
      machine,
      this.options
    );
  }

  public delete(machine: Machine): Observable<Machine> {
    return this.http.delete<Machine>(this.url + '/' + machine.id, this.options);
  }

  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count', this.options);
  }
  public countActive(): Observable<number> {
    return this.http.get<number>(this.url + '/count?active=true', this.options);
  }
  public countDisable(): Observable<number> {
    return this.http.get<number>(
      this.url + '/count?active=false',
      this.options
    );
  }
  //--------------------------------------------------------------
  public getNames(): Observable<MachineName[]> {
    return this.http.get<MachineName[]>(this.url + '/names', this.options);
  }

  //Auth - JWT
  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.sessions.token,
      }),
    };
  }
}

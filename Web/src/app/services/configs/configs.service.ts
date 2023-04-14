import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Machine } from 'src/app/models/machine.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'machines';

  public findAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.url);
  }

  public findById(id: number): Observable<Machine> {
    return this.http.get<Machine>(this.url + '/' + id);
  }

  public insert(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.url, machine);
  }

  public update(machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(this.url + '/' + machine.id, machine);
  }

  public delete(machine: Machine): Observable<Machine> {
    return this.http.delete<Machine>(this.url + '/' + machine.id);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Machine } from 'src/app/models/machine.model';
import { environment } from 'src/environments/environment';
import { name } from 'src/app/models/names.model';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'Machines';

  public findAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.url + '?limit=15');
  }

  public findById(id: number): Observable<Machine> {
    return this.http.get<Machine>(this.url + '/' + id);
  }

  public insert(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.url, machine);
  }

  public update(machine: Machine): Observable<Machine> {
    console.log('update machine: ', machine);
    return this.http.put<Machine>(this.url + '/' + machine.id, machine);
  }

  public delete(machine: Machine): Observable<Machine> {
    return this.http.delete<Machine>(this.url + '/' + machine.id);
  }

  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count');
  }
  public countActive(): Observable<number> {
    return this.http.get<number>(this.url + '/count?active=true');
  }
  public countDisable(): Observable<number> {
    return this.http.get<number>(this.url + '/count?active=false');
  }
  //--------------------------------------------------------------
  public getNames(): Observable<name[]> {
    return this.http.get<name[]>(this.url + '/names');
  }
}

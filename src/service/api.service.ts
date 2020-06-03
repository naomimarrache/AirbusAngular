import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ressource } from 'src/app/pages/consult/Ressource';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}

public createRessource(ressource: Ressource) {
  const username = 'admin';
  const password = 'password';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic ' +  btoa(username + ':' + password)
    })
  };

  return this.httpClient.post<Ressource>(`${this.apiURL}/avions`, ressource, httpOptions)
    .pipe(map(resp => {
  }));
}

public updateRessource(ressource: Ressource) {}

public deleteRessource(id: number) {
  const username = 'admin';
  const password = 'password';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic ' +  btoa(username + ':' + password)
    })
  };

  return this.httpClient.delete<Ressource>(`${this.apiURL}/avions/` + id, httpOptions)
    .pipe(map(resp => {
  }));
}

public getRessourceById(id: number) {}

public getRessources(url?: string) {
  const username = 'user';
  const password = 'password';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic ' +  btoa(username + ':' + password)
    })
  };


  return this.httpClient.get<Ressource[]>(`${this.apiURL}/avions`, httpOptions);
  // .pipe(map(resp => {
  //   debugger;
  //   console.log(resp);
  // }));
}
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) {
  }

  public generateToken(request: any) {
    return this.http.post(API_URL + `/authenticate`, request, {responseType: 'text' as 'json'});
  }

  public welcome(token: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(API_URL + `/`, {headers, responseType: 'text' as 'json'});
  }
}

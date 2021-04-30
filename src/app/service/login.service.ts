import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {url} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
   login(body: any){
    return this.http.post('http://localhost:3000/users/login', body, {
      observe: 'body'
    });
  }
   getUserName() {
    return this.http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('authorization',localStorage.getItem('token'))
    });
  }
}

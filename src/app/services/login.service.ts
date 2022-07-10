import { User } from './../models/user';
import { NewUser } from '../models/newuser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  urllogin = "http://localhost:3001"

  login(user: User): Observable<any> {
    return this.httpClient.post(`${this.urllogin}/login` , JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    });
  }

  newlogin(user: NewUser): Observable<any> {
    return this.httpClient.post(`${this.urllogin}/register` , JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    });
  }

  editlogin(user: NewUser, coduser: string): Observable<any> {
    return this.httpClient.put(`${this.urllogin}/users/${coduser}` , JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    });
  }

  getlogin(coduser: string): Observable<any> {
    return this.httpClient.get(`${this.urllogin}/users/${coduser}`,{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    });
  }
}

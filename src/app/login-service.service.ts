import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{user}from './loginUser'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/login';
  }
 
  public save(User: user):Observable<boolean> {
    console.log(User)
    return this.http.post<boolean>(this.usersUrl, User);
  }
}

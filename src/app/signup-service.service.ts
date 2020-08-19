import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{signupuser} from './signupUser'
@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/signup';
  }
  public save(User: signupuser):Observable<boolean> {
    console.log(User)
    return this.http.post<boolean>(this.usersUrl, User);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{user}from './loginUser'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private usersUrl: string;
  private adminUrl:string;
  private idUrl:string
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/login';
    this.adminUrl='http://localhost:8089/admin';
    this.idUrl='http://localhost:8089/id'
  }
 
  public save(User: user):Observable<boolean> {
    
    return this.http.post<boolean>(this.usersUrl, User);
  }

  public admin(User: user):Observable<boolean> {
    console.log("inside admin")
    return this.http.post<boolean>(this.adminUrl, User);
  }

  public id(name:string):Observable<number>{
   return this.http.post<number>(this.idUrl,name);
  }
}

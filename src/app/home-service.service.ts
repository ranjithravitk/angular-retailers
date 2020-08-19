import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{product} from'./product';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/home';
  }
  public getProducts():Observable<product[]> {
    
    return this.http.get<product[]>(this.usersUrl);
  }
}

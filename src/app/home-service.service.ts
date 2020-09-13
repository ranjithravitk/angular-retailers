import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{product} from'./product';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private usersUrl: string;
  private updateUrl:string;
  private idUrl:string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/home';
    this.updateUrl='http://localhost:8089/update';
    this.idUrl='http://localhost:8089/idProduct';
  }
  public getProducts():Observable<product[]> {
    
    return this.http.get<product[]>(this.usersUrl);
  }
  public updateProduct(p:product):Observable<number>{
    console.log("inside update")
    return this.http.post<number>(this.updateUrl,p);
  }
  public idProduct(p:product):Observable<number>{
    return this.http.post<number>(this.idUrl,p)
  }
}

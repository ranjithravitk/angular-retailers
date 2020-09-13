import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{product} from'./product';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private usersUrl: string;
  private cartUrl:string;
  private deleteUrl:string;
  private deleteallUrl:string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/cart';
    this.cartUrl='http://localhost:8089/getcart';
    this.deleteUrl='http://localhost:8089/delete';
    this.deleteallUrl='http://localhost:8089/deleteAll';
  }
public addProduct(cartProduct:product):Observable<boolean>{
  return this.http.post<boolean>(this.usersUrl,cartProduct);
}

public getProduct(name:string): Observable<product[]>{
  console.log(name)
  return this.http.post<product[]>(this.cartUrl,name);
}
public deleteProduct(deleteproct:product):Observable<boolean>{
  return this.http.post<boolean>(this.deleteUrl,deleteproct);
  
}
public deleteAll(name:string):Observable<boolean>{
  return this.http.post<boolean>(this.deleteallUrl,name);
}
}

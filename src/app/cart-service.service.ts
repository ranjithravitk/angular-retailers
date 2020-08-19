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
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8089/cart';
    this.cartUrl='http://localhost:8089/getcart';

  }
public addProduct(cartProduct:product):Observable<boolean>{
  return this.http.post<boolean>(this.usersUrl,cartProduct);
}

public getProduct(): Observable<product[]>{
  return this.http.get<product[]>(this.cartUrl);
}
}

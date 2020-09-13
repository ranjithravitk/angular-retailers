import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import{product} from'./product';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private listUrl:string;
  private checkUrl:string;
  private updateUrl:string;
  private userStockUrl:string;
  constructor(private http: HttpClient) {
    this.listUrl='http://localhost:8089/listitem';
    this.checkUrl='http://localhost:8089/checkitem';
    this.updateUrl='http://localhost:8089/stockitem';
    this.userStockUrl='http://localhost:8089/userStock';
   }
   public addProduct(listProduct:product):Observable<boolean>{
    return this.http.post<boolean>(this.listUrl,listProduct);
  }
  public checkproduct():Observable<product[]>{
     return this.http.get<product[]>(this.checkUrl);
  }
  public updateproduct(p:product):Observable<boolean>{
    return this.http.post<boolean>(this.updateUrl,p)
  }

  public userStock(p:product):Observable<boolean>{
    return this.http.post<boolean>(this.userStockUrl,p)
  }
}

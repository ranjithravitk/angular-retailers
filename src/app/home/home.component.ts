import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ActivatedRoute,ParamMap} from '@angular/router';
import{HomeServiceService} from'../home-service.service';
import { product } from '../product';
import{CartServiceService} from '../cart-service.service';
import{AppComponent} from '../app.component';
import {Router} from'@angular/router';
import{LoginServiceService} from'../login-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string
  items:product[]
  cartItem:boolean
  update:number
  constructor(private loginService:LoginServiceService,private route:ActivatedRoute,private homeService:HomeServiceService,private cartService:CartServiceService,private app:AppComponent,private router:Router) {
    this.update=0

   }
  
  ngOnInit(): void {
    let name=this.route.snapshot.paramMap.get('name')
    this.assign(name)
    this.homeService.getProducts().subscribe(data => {
      this.items = data;
    });
    this.app.update(name,true,true,false);
    
  }
assign(name){
  this.name=name
}
getname(){
  return this.name
}
add(p:product){
p.cart=true
p.user=this.getname()
this.homeService.updateProduct(p).subscribe(data=>{this.update=data;
  if(this.update==0){
    this.cartService.addProduct(p).subscribe(data=>{this.cartItem=data});}
else{
  alert(this.update+" number of stocks are only available!")
}
});;

if(!this.cartItem){
  p.cart=false
}
else{
  alert("Added  Successfully!!!")
}
}

}

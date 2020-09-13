import { Component, OnInit } from '@angular/core';
import{product} from '../product'
import{ActivatedRoute,ParamMap} from '@angular/router';
import{CartServiceService} from'../cart-service.service';
import{AdminServiceService} from'../admin-service.service';
import{AppComponent} from'../app.component';
import{HomeComponent} from'../home/home.component';
import {Router} from'@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:product[];
  check:boolean;
  message:string;
  name:string;
  update:boolean
  deleteAll:boolean
  constructor(private router:Router,private adminService:AdminServiceService,private route:ActivatedRoute,private cartService:CartServiceService, private app:AppComponent,private home:HomeComponent) { }

  ngOnInit(): void {
     let name=this.route.snapshot.paramMap.get('name')
     this.assign(name)
    this.cartService.getProduct(name).subscribe(data => {
      this.products = data;
      console.log(this.products)
      if(this.products.length!=0){
        console.log(this.products.length)
        this.check=true;
      }
      else{
        this.check=false;
       this.message="Your cart is empty!!"
      }
    });
    
  this.app.update(this.name,false,true,false)
  
  }
  assign(name){
    this.name=name
  }
  
  place(){
    this.cartService.deleteAll(this.getname()).subscribe(data=>{this.deleteAll=data});
    if(this.deleteAll==false){
      alert("less number of stocks available")
    }
  }
  getname(){
return this.name
  }


 remove(p :product){
p.cart=false
console.log(p)
this.cartService.deleteProduct(p).subscribe(data => {
  
});

window.location.reload()
 }

 back(){
  this.router.navigate(['/home',this.name]);
 }
  
}


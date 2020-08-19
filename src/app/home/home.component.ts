import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ActivatedRoute,ParamMap} from '@angular/router';
import{HomeServiceService} from'../home-service.service';
import { product } from '../product';
import{CartServiceService} from '../cart-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private homeService:HomeServiceService,private cartService:CartServiceService) { }
   name:string
   items:product[]
   cartItem:boolean
  ngOnInit(): void {
    let name=this.route.snapshot.paramMap.get('name')
    this.assign(name)
    this.homeService.getProducts().subscribe(data => {
      this.items = data;
    });
  }
assign(name){
  this.name=name
}
getname(){
  return this.name
}
add(p:product){
p.cart=true
this.cartService.addProduct(p).subscribe(data=>{this.cartItem=data});
if(!this.cartItem){
  p.cart=false
}
}
}

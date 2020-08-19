import { Component, OnInit } from '@angular/core';
import{product} from '../product'
import{ActivatedRoute,ParamMap} from '@angular/router';
import{CartServiceService} from'../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:product[];
  constructor(private route:ActivatedRoute,private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(data => {
      this.products = data;
    });
  }
 
}


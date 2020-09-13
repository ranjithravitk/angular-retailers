import { Component, AfterViewInit, ViewChild ,Input} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {Router} from'@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'retailers';
   name:string;
   show:boolean;
   cart:boolean;
   logout:boolean;
   adminlogin:boolean;
   goback:boolean;
   constructor( private router:Router){
     this.adminlogin=true;
     this.goback=false;
   }
   update(name:string ,cart:boolean,logout:boolean,admin:boolean){
    this.name= name;
    this.cart=cart;
    this.logout=logout;
    this.adminlogin=admin
    this.show=true
   
  }
  Logout(){
    this.show=false
    this.cart=false
    this.logout=false
    this.adminlogin=true
    this.router.navigate(['/']);
  }
  cartShow(){
   this.router.navigate(['/cart',this.name]);
  }
  admin(){
    this.adminlogin=false;
    this.goback=true;
    this.router.navigate(['/admin']);
  }
  Goback(){
   this.adminlogin=true;
   this.goback=false;
   this.router.navigate(['/']);
  }
}

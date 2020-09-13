import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import{AdminServiceService} from'../admin-service.service';
import{ActivatedRoute,ParamMap} from '@angular/router';
import{AppComponent} from'../app.component';
import {Router} from'@angular/router';
@Component({
  selector: 'app-admin-home-list',
  templateUrl: './admin-home-list.component.html',
  styleUrls: ['./admin-home-list.component.css']
})
export class AdminHomeListComponent implements OnInit {
  products:product[]
  name:string
  updateValue:boolean
  enableValue:boolean
  empty:boolean
  message:string
  constructor(private adminservice:AdminServiceService,private route:ActivatedRoute,private app:AppComponent,private router:Router) {
    this.enableValue=true
   }

  ngOnInit(): void {
    
    this.app.goback=false
    this.name=this.route.snapshot.paramMap.get('name')
    
    this.app.update(this.name,false,true,false)
this.adminservice.checkproduct().subscribe(data=>{this.products=data});

  }


back(){
  this.router.navigate(['/adminHome',this.name]);
}
enable(p:product ){
 p.quantity=1

}

add(p:product){
console.log("inside add list")
this.adminservice.updateproduct(p).subscribe(data=>{this.updateValue=data});
if(this.updateValue){
  alert("Item Added Successfully!!!")
}
}

}

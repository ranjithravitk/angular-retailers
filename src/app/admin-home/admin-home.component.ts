import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import{AdminServiceService} from'../admin-service.service';
import{AppComponent} from'../app.component';
import {Router} from'@angular/router';
import{ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  prod:product
  added:boolean
  checked:product[]
  name:string
  constructor(private adminservice:AdminServiceService,private route:ActivatedRoute,private app:AppComponent,private router:Router) {
    this.prod=new product()
   }

  ngOnInit(): void {
    this.app.goback=false
  
    this.name=this.route.snapshot.paramMap.get('name')
    
    this.app.update(this.name,false,true,false)
  }
add(){
  
this.adminservice.addProduct(this.prod).subscribe(data => {
  this.added = data;
});
}
list(){
  this.router.navigate(['/adminlist',this.name]);
}
}

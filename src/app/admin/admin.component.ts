import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {Router} from'@angular/router';
import{user} from '../loginUser'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import{LoginServiceService} from'../login-service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  login :user
 
  check:boolean
   
    constructor(private router:Router,private loginService:LoginServiceService) { 
     
      this.login=new user()
     
      
    }
   
    home(){
      this.router.navigate(['/adminHome',this.login.name]);
    }
    ngOnInit(): void {
      
    }
  verify(){
    
    this.loginService.admin(this.login).subscribe(data => {
      
      if(data){
        this.home()
        } 
    });
    
  
   
  }
  

}

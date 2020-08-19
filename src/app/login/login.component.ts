import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {Router, UrlSerializer} from'@angular/router';
import{user} from '../loginUser'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import{LoginServiceService} from'../login-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login :user
 
check:boolean
 
  constructor(private router:Router,private loginService:LoginServiceService) { 
   
    this.login=new user()
    
    
  }
  signup(){
    this.router.navigateByUrl('/signup');
  }
  home(){
    this.router.navigate(['/home',this.login.name]);
  }
  ngOnInit(): void {
    
  }
verify(){
  
  this.loginService.save(this.login).subscribe(data => {
    
    if(data){
      this.home()
      } 
  });
  

 
}

}

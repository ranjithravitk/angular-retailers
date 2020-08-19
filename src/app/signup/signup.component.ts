import { Component, OnInit } from '@angular/core';
import{signupuser} from '../signupUser';
import{SignupServiceService} from'../signup-service.service'
import {Router, UrlSerializer} from'@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   signup:signupuser
   submit:boolean =false
  constructor(private router:Router,private signupService:SignupServiceService) { 
    this.signup =new signupuser()
  }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['/home',this.signup.name]);
  }
verify(){
  if(this.signup.password==this.signup.retype_password){
    console.log("inside verify")
   this.signupService.save(this.signup).subscribe(data => {
    
    if(data){
      this.home()
      } 
  });
  }
}
}

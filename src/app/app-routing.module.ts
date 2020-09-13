import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{SignupComponent} from './signup/signup.component';
import{HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import{AdminHomeComponent} from'./admin-home/admin-home.component';
import { AdminHomeListComponent } from './admin-home-list/admin-home-list.component';
const routes: Routes = [


  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home/:name",component:HomeComponent},
  {path:"cart/:name",component:CartComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminHome/:name",component:AdminHomeComponent},
  {path:"adminlist/:name",component:AdminHomeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

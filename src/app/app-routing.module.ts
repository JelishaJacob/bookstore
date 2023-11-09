import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LandingComponent } from './landing/landing.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "user-reg", component: UserRegComponent },
  { path: "admin-home", component: AdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

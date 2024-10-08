import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NwsLoginComponent} from "./login/pages/nws-login/nws-login.component";
import {NwsSignupComponent} from "./register/pages/nws-signup/nws-signup.component";

const routes: Routes = [
  {
    path: 'login',
    component: NwsLoginComponent
  },
  {
    path: 'signup',
    component: NwsSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

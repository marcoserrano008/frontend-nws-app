import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {NwsLoginComponent} from "./login/pages/nws-login/nws-login.component";
import {NwsSignupComponent} from "./register/pages/nws-signup/nws-signup.component";
import {NwsSystemUiModule} from "@nws/system-ui";
import {SharedModule} from "@shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AuthService} from "@core/services/auth.service";

@NgModule({
  declarations: [
    NwsLoginComponent,
    NwsSignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NwsSystemUiModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
  ]
})
export class AuthModule {
}

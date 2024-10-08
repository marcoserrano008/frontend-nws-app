import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NwsGlobalAlertComponent } from './nws-global-alert/nws-global-alert.component';


@NgModule({
  declarations: [
    NwsGlobalAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NwsGlobalAlertComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { NwsSystemUiComponent } from './nws-system-ui.component';
import { NwsButtonComponent } from './components/nws-button/nws-button.component';
import { NwsInputComponent } from './components/nws-input/nws-input.component';
import { NwsAvatarComponent } from './components/nws-avatar/nws-avatar.component';
import { NwsFileInfoComponent } from './components/nws-file-info/nws-file-info.component';
import { NwsInformationComponent } from './components/nws-information/nws-information.component';
import { NwsTextareaComponent } from './components/nws-textarea/nws-textarea.component';
import { NwsAlertComponent } from './components/nws-alert/nws-alert.component';
import { NwsDialogComponent } from './components/nws-dialog/nws-dialog.component';
import { NwsLabelComponent } from './components/nws-label/nws-label.component';
import {CommonModule} from "@angular/common";
import {DirectivesModule} from "./directives/directives.module";



@NgModule({
  declarations: [
    NwsSystemUiComponent,
    NwsButtonComponent,
    NwsInputComponent,
    NwsAvatarComponent,
    NwsFileInfoComponent,
    NwsInformationComponent,
    NwsTextareaComponent,
    NwsAlertComponent,
    NwsDialogComponent,
    NwsLabelComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    NwsSystemUiComponent,
    NwsInputComponent,
    NwsAvatarComponent,
    NwsFileInfoComponent,
    NwsInformationComponent,
    NwsTextareaComponent,
    NwsAlertComponent,
    NwsDialogComponent,
    NwsLabelComponent,
    NwsButtonComponent,
    DirectivesModule
  ]
})
export class NwsSystemUiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NwsGlobalAlertComponent } from './nws-global-alert/nws-global-alert.component';
import { NwsImageSliderComponent } from './nws-image-slider/nws-image-slider.component';
import {NwsSystemUiModule} from "@nws/system-ui";
import {NwsFileDetailComponent} from "@shared/components/nws-file-detail/nws-file-detail.component";
import {NwsFloatingMenuComponent} from "@shared/components/nws-floating-menu/nws-floating-menu.component";
import {NwsCreateCommentComponent} from "@shared/components/nws-create-comment/nws-create-comment.component";
import {FormsModule} from "@angular/forms";
import {NwsHeaderComponent} from "@shared/components/nws-header/nws-header.component";

@NgModule({
  declarations: [
    NwsFileDetailComponent,
    NwsFloatingMenuComponent,
    NwsCreateCommentComponent,
    NwsHeaderComponent,
    NwsGlobalAlertComponent,
    NwsImageSliderComponent
  ],
  imports: [
    CommonModule,
    NwsSystemUiModule,
    FormsModule,
  ],
  exports: [
    NwsFileDetailComponent,
    NwsFloatingMenuComponent,
    NwsCreateCommentComponent,
    NwsHeaderComponent,
    NwsGlobalAlertComponent,
    NwsImageSliderComponent
  ]
})
export class ComponentsModule { }

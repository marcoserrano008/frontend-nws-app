import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NwsUserDetailComponent} from "./components/nws-user-detail/nws-user-detail.component";
import {NwsSystemUiModule} from "@nws/system-ui";
import {NwsFileDetailComponent} from './components/nws-file-detail/nws-file-detail.component';
import {NwsPostComponent} from './components/nws-post/nws-post.component';
import {DirectivesModule} from "@shared/directives/directives.module";
import {NwsHeaderComponent} from "@shared/components/nws-header/nws-header.component";
import {NwsFloatingMenuComponent} from './components/nws-floating-menu/nws-floating-menu.component';
import {RouterModule} from "@angular/router";
import {NwsCreateCommentComponent} from './components/nws-create-comment/nws-create-comment.component';
import {FormsModule} from "@angular/forms";
import {NwsDateFormaterPipe} from './pipes/nws-date-formater.pipe';
import {ComponentsModule} from "@shared/components/components.module";

@NgModule({
  declarations: [
    NwsUserDetailComponent,
    NwsFileDetailComponent,
    NwsPostComponent,
    NwsHeaderComponent,
    NwsFloatingMenuComponent,
    NwsCreateCommentComponent,
    NwsDateFormaterPipe,
  ],
  imports: [
    CommonModule,
    NwsSystemUiModule,
    DirectivesModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    NwsUserDetailComponent,
    NwsFileDetailComponent,
    NwsPostComponent,
    NwsHeaderComponent,
    DirectivesModule,
    NwsFloatingMenuComponent,
    NwsCreateCommentComponent,
    ComponentsModule
  ]
})
export class SharedModule {
}

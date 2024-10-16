import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NwsUserDetailComponent} from "./components/nws-user-detail/nws-user-detail.component";
import {NwsSystemUiModule} from "@nws/system-ui";
import {NwsFileDetailComponent} from './components/nws-file-detail/nws-file-detail.component';
import {NwsPostComponent} from './components/nws-post/nws-post.component';
import {DirectivesModule} from "@shared/directives/directives.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NwsDateFormaterPipe} from './pipes/nws-date-formater.pipe';
import {ComponentsModule} from "@shared/components/components.module";
import {NwsCreateCommentComponent} from "@shared/components/nws-create-comment/nws-create-comment.component";

@NgModule({
  declarations: [
    NwsUserDetailComponent,
    NwsPostComponent,
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
    DirectivesModule,
    NwsCreateCommentComponent,
    ComponentsModule
  ]
})
export class SharedModule {
}

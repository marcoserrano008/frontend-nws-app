import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments.component';
import {NwsCommentsComponent} from './pages/nws-comments/nws-comments.component';
import {SharedModule} from "@shared/shared.module";
import {NwsCommentComponent} from './components/nws-comment/nws-comment.component';
import {NwsCommentListComponent} from './components/nws-comment-list/nws-comment-list.component';
import {FormsModule} from "@angular/forms";
import {CommentsService} from "@core/services/comments.service";

@NgModule({
  declarations: [
    CommentsComponent,
    NwsCommentsComponent,
    NwsCommentComponent,
    NwsCommentListComponent
  ],
  exports: [
    NwsCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
  ]
})
export class CommentsModule {
}

import {Component, Input, OnInit} from '@angular/core';
import * as CommentsActions from "@nwsState/actions/comment.actions";
import {CreateCommentApiRequest} from "@core/models/http/create-comment-api-request.model";
import {CommentsService} from "@core/services/comments.service";
import {Store} from "@ngrx/store";
import * as PostsActions from "@nwsState/actions/posts.actions";
import {Comment} from "@nwsState/models/comment.model";

@Component({
  selector: 'nws-create-comment',
  templateUrl: './nws-create-comment.component.html',
  styleUrls: ['./nws-create-comment.component.scss']
})
export class NwsCreateCommentComponent implements OnInit {

  public commentBody: string;
  @Input() postId!: number;
  @Input() parentCommentId?: number;
  private _createCommentRequest: CreateCommentApiRequest;

  constructor(private _commentsService: CommentsService, private _store: Store) {
    this.commentBody = '';
    this._createCommentRequest = {
      content: this.commentBody,
      parentCommentId: this.parentCommentId ? this.parentCommentId : undefined,
    }
  }

  ngOnInit(): void {
  }

  public createComment(): void {
    this._setCommentApiRequest();
    this.postComment();
  }

  public postComment(): void {
    if (this.commentBody.trim()) {
      this._commentsService.postComment(this._createCommentRequest, this.postId).subscribe({
        next: (comment) => {
          this.commentBody = '';
        },
        error: (error) => {
          console.error("Comment can't be published", error);
        }
      });
    } else {
      console.log("Comment can't be empty");
    }
  }

  private _setCommentApiRequest(): void {
    this._createCommentRequest = {
      content: this.commentBody,
      parentCommentId: this.parentCommentId ? this.parentCommentId : undefined,
    }
  }
}

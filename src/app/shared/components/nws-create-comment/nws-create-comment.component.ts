import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CreateCommentApiRequest} from "@core/models/http/create-comment-api-request.model";
import {CommentsService} from "@core/services/comments.service";
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'nws-create-comment',
  templateUrl: './nws-create-comment.component.html',
  styleUrls: ['./nws-create-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsCreateCommentComponent implements OnDestroy {
  @Input() postId!: number;
  @Input() parentCommentId?: number;

  public commentBody: string;

  private _createCommentRequest: CreateCommentApiRequest;
  private _destroy$: Subject<void>;

  constructor(private _commentsService: CommentsService,
              private _store: Store,
              private _route: ActivatedRoute) {
    this.commentBody = '';
    this._createCommentRequest = {
      content: this.commentBody,
      parentCommentId: this.parentCommentId ? this.parentCommentId : undefined,
    }
    this._destroy$ = new Subject<void>();
  }

  ngOnDestroy(): void {
   this._finalize();
  }

  public createComment(): void {
    this._setCommentApiRequest();
    this.postComment();
  }

  public postComment(): void {
    if (this.postId === undefined || this.postId === null) {
      this._getIdFromRoute();
    }
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

  private _getIdFromRoute(): void {
    this._route.params
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => {
        this.postId = +params['id'];
      })
  }

  private _finalize(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

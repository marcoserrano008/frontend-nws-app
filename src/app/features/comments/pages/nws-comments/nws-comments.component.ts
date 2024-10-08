import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {Post} from "@nwsState/models/post.model";
import {selectPostById} from "@nwsState/selectors/posts.selectors";
import * as CommentsActions from "@nwsState/actions/comment.actions"
import {selectAllComments} from "@nwsState/selectors/comments.selectors";
import {Comment} from "@nwsState/models/comment.model";
import {CommentsService} from "@core/services/comments.service";
import {takeUntil} from "rxjs/operators";
import {WsCommentsService} from "@core/services/ws-comments.service";
import * as PostsActions from "@nwsState/actions/posts.actions";

@Component({
  selector: 'nws-comments',
  templateUrl: './nws-comments.component.html',
  styleUrls: ['./nws-comments.component.scss']
})
export class NwsCommentsComponent implements OnInit, OnDestroy {
  public bulletin$: Observable<Post | undefined>;
  public _postId!: number;
  public comments$: Observable<Comment[]>;
  public showReplyInput: boolean;
  public commentBody: string;
  private _destroy$: Subject<void>;

  constructor(private _route: ActivatedRoute,
              private _store: Store,
              private _commentsService: CommentsService,
              private _wsCommentsService: WsCommentsService) {
    this.bulletin$ = new Observable;
    this.comments$ = new Observable;
    this.showReplyInput = false;
    this.commentBody = '';
    this._destroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._getIdFromRoute();
    this.comments$ = this._store.select(selectAllComments);

    this._wsCommentsService.getCommentStream(this._postId)
      .pipe(takeUntil(this._destroy$))
      .subscribe((comment: Comment) => {
        if(comment.parentCommentId) {
          this._addNewReplyToStore(comment.parentCommentId, comment);
        } else {
          this._addNewCommentToStore(comment);
        }
        this._reloadPosts();
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getIdFromRoute(): void {
    this._route.params
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => {
        this._postId = +params['id'];
        this.bulletin$ = this._store.select(selectPostById(this._postId))
        this._loadComments();
      })
  }

  private _loadComments() {
    if (this._postId) {
      this._store.dispatch(CommentsActions.loadComments({postId: this._postId}));
    }
  }

  public toggleShowReplyInput(): void {
    this.showReplyInput = !this.showReplyInput;
  }

  private _addNewCommentToStore(comment: Comment): void {
    this._store.dispatch(CommentsActions.addComment( { comment }));
  }

  private _addNewReplyToStore(parentCommentId: number, reply: Comment): void {
    this._store.dispatch(CommentsActions.addReply({ parentCommentId: parentCommentId, reply: reply }));
  }

  private _reloadPosts(): void {
    this._store.dispatch(PostsActions.loadPosts( { body: '' }));
  }
}

import * as CommentsActions from "@nwsState/actions/comment.actions";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {CommentsService} from "@core/services/comments.service";

@Injectable()
export class CommentsEffects {
  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.loadComments),
      mergeMap(({ postId }) =>
        this.commentsService.getCommentsForPost(postId).pipe(
          map(comments =>
            CommentsActions.loadCommentsSuccess({ postId, comments })
          ),
          catchError(error => of(CommentsActions.loadCommentsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}
}

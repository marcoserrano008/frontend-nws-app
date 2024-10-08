import * as PostsActions from "@nwsState/actions/posts.actions";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {PostsService} from "@core/services/posts.service";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      mergeMap(action =>
        this.postsService.getPosts(0, 8, action.body).pipe(
          map(posts => PostsActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostsActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  loadMorePosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadMorePosts),
      mergeMap(action =>
        this.postsService.getPosts(action.page).pipe(
          map(posts => PostsActions.loadMorePostsSuccess({ posts })),
          catchError(error => of(PostsActions.loadMorePostsFailure({ error })))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}
}

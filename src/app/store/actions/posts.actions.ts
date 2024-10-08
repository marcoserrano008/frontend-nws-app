import {createAction, props} from "@ngrx/store";
import {Post} from "@nwsState/models/post.model";

export const loadPosts = createAction(
  '[Posts] Load Posts',
  props<{ body: string }>()
);

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
)

export const loadPostsFailure = createAction(
  '[Post] Load Post Failure',
  props<{ error: any }>()
);

export const loadMorePosts = createAction(
  '[Posts] Load More Posts]',
  props<{ page: number }>()
);

export const loadMorePostsSuccess = createAction(
  '[Posts] Load More Posts Success]',
  props<{ posts: Post[] }>()
);

export const loadMorePostsFailure = createAction(
  '[Post] Load More Posts Failure',
  props<{ error: any }>()
);


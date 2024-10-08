import * as PostsActions from "@nwsState/actions/posts.actions";
import {createEntityAdapter} from "@ngrx/entity";
import {Post} from "@nwsState/models/post.model";
import {PostsState} from "@nwsState/state/post.state";
import {createReducer, on} from "@ngrx/store";

export const postsAdapter = createEntityAdapter<Post>();

export const initialState: PostsState = postsAdapter.getInitialState({
  loading: false,
  error: null
});

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loading: false })
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(PostsActions.loadMorePosts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PostsActions.loadMorePostsSuccess, (state, { posts }) =>
    postsAdapter.addMany(posts, {
      ...state,
      loading: false
    })
  ),
  on(PostsActions.loadMorePostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

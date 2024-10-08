import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "@nwsState/state/post.state";
import * as fromAdapter from '@nwsState/reducers/posts.reducer'


export const selectPostState = createFeatureSelector<PostsState>('posts');

const {selectIds, selectEntities,selectAll,selectTotal} = fromAdapter.postsAdapter.getSelectors();

export const selectAllPosts = createSelector(
  selectPostState,
  selectAll
);

export const selectPostEntities = createSelector(
  selectPostState,
  selectEntities
);

export const selectPostById = (postId: number) => createSelector(
  selectPostEntities,
  entities => entities[postId]
);

export const selectPostsLoading = createSelector(
  selectPostState,
  state => state.loading
);

export const selectPostError = createSelector(
  selectPostState,
  state => state.error
);

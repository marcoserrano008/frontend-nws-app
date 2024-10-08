import * as fromAdapter from '@nwsState/reducers/comments.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CommentsState} from "@nwsState/state/comments.state";

export const selectCommentsState = createFeatureSelector<CommentsState>('comments');

const {selectIds, selectEntities, selectAll, selectTotal} = fromAdapter.commentsAdapter.getSelectors();

export const selectAllComments = createSelector(
  selectCommentsState,
  selectAll
);

export const selectCommentsLoading = createSelector(
  selectCommentsState,
  state => state.loading
);

export const selectCommentsError = createSelector(
  selectCommentsState,
  state => state.error
);

export const selectCommentsByPostId = (postId: number) =>
  createSelector(
    selectAllComments,
    comments => comments.filter((comment) => comment.postId === postId)
  );

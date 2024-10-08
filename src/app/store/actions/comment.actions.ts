import {createAction, props} from "@ngrx/store";
import {Comment} from "@nwsState/models/comment.model";

export const loadComments = createAction(
  '[Comments] Load Comments',
  props<{ postId: number }>()
);

export const loadCommentsSuccess = createAction(
  '[Comments] Load Comments Success',
  props<{ postId: number; comments: Comment[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments] Load Comments Failure',
  props<{ error: any }>()
);

export const addComment = createAction(
  '[Comments] Add comment',
  props<{ comment: Comment}>()
);

export const addReply = createAction(
  '[Comments] Add Reply',
  props<{ parentCommentId: number; reply: Comment }>()
);

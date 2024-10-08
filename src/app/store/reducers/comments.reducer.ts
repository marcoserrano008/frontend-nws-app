import * as CommentsActions from "@nwsState/actions/comment.actions";
import {createEntityAdapter} from "@ngrx/entity";
import {Comment} from "@nwsState/models/comment.model";
import {CommentsState} from "@nwsState/state/comments.state";
import {createReducer, on} from "@ngrx/store";

export const commentsAdapter = createEntityAdapter<Comment>();

export const initialState: CommentsState = commentsAdapter.getInitialState({
  loading: false,
  error: null
});

export const commentsReducer = createReducer(
  initialState,
  on(CommentsActions.loadComments, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CommentsActions.loadCommentsSuccess, (state, { comments }) =>
    commentsAdapter.setAll(comments, { ...state, loading: false })
  ),
  on(CommentsActions.loadCommentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(CommentsActions.addComment, (state, { comment }) =>
    commentsAdapter.addOne(comment, state)
  ),
  on(CommentsActions.addReply, (state, { parentCommentId, reply }) => {
    const updateNestedReplies = (comments: Comment[], parentId: number, newReply: Comment): Comment[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
            repliesCounter: comment.repliesCounter + 1
          };
        } else if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateNestedReplies(comment.replies, parentId, newReply)
          };
        }
        return comment;
      });
    };

    const updatedComments = updateNestedReplies(Object.values(state.entities).filter((comment): comment is Comment => comment !== undefined), parentCommentId, reply);
    return {
      ...state,
      entities: updatedComments.reduce((entities, comment) => {
        entities[comment.id] = comment;
        return entities;
      }, { ...state.entities })
    };
  })
);

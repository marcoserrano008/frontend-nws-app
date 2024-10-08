import {AuthState} from "@nwsState/state/auth.state";
import {PostsState} from "@nwsState/state/post.state";
import {CommentsState} from "@nwsState/state/comments.state";

export interface AppState {
  auth: AuthState;
  posts: PostsState;
  comments: CommentsState;
}

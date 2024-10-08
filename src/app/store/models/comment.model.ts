import {User} from "@nwsState/models/user.model";

export interface Comment {
  id: number;
  postId: number;
  senderUser?: User;
  content: string;
  repliesCounter: number;
  createdDate: string;
  parentCommentId?: number;
  replies: Comment[];
}

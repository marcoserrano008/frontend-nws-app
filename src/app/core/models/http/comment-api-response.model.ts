import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";

export interface CommentApiResponse {
  id: number;
  senderUser?: SenderUserApiResponseModel;
  content: string;
  repliesCounter: number;
  createdDate: string;
  replies: CommentApiResponse[];
}

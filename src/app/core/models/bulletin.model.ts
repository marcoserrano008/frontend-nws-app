import {Attachment} from "@core/models/attachment.model";
import {User} from "@nwsState/models/user.model";

export interface Bulletin {
  id: number;
  accountId: number;
  senderUser: User;
  body: string;
  createdDate: string;
  commentsCounter: number;
  attachments: Attachment[];
}

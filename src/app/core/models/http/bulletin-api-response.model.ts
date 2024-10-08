import {AttachmentApiResponse} from "@core/models/http/attachment-api-response.model";
import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";

export interface BulletinApiResponse {
  id: number;
  accountId: number;
  senderUser: SenderUserApiResponseModel,
  body: string;
  createdDate: string;
  commentsCounter: number;
  attachments: AttachmentApiResponse[];
}

import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";

export interface LoginApiResponse {
  token: string,
  userDetail: SenderUserApiResponseModel
}

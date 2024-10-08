import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Comment} from "@nwsState/models/comment.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CommentApiResponse} from "@core/models/http/comment-api-response.model";
import {User} from "@nwsState/models/user.model";
import {catchError, map, tap} from "rxjs/operators";
import {ApiErrorResponse} from "@core/models/http/api-error-response.model";
import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";
import {CreateCommentApiRequest} from "@core/models/http/create-comment-api-request.model";
import {AlertService} from "@core/services/alert.service";
import {AlertType} from "@core/enums/nws-alert-type.enum";
import {COMMENTS_MESSAGES} from "@core/constants/nws-comments-messages.constants";

@Injectable()
export class CommentsService {

  private _apiUrl: string = '/news-service'

  constructor(private _http: HttpClient, private _alertService: AlertService) { }

  public getCommentsForPost(postId: number): Observable<Comment[]> {
    return this._http.get<CommentApiResponse[]>(`${this._apiUrl}/bulletins/${postId}/comments`).pipe(
      map(response => this._mapCommentsApiResponseToComments(response, postId)),
      catchError(error => this._handleError(error))
    );
  }

  public postComment(request: CreateCommentApiRequest, bulletinId: number): Observable<Comment> {
    const requestBody: CreateCommentApiRequest = {
      content: request.content,
    };
    if (request.parentCommentId !== undefined) {
      requestBody.parentCommentId = request.parentCommentId;
    }

    return this._http.post<CommentApiResponse>(`${this._apiUrl}/bulletins/${bulletinId}/comments`, requestBody)
      .pipe(
        map(response => this._mapCommentApiResponseToComment(response, bulletinId)),
        tap(() => this._alertService.showAlert(COMMENTS_MESSAGES.COMMENT_CREATE_SUCCESS)),
        catchError(error => {
          this._alertService.showAlert(COMMENTS_MESSAGES.COMMENT_CREATE_ERROR, AlertType.ERROR);
          return this._handleError(error)
        })
      );
  }

  private _mapCommentApiResponseToComment(response: CommentApiResponse, postId: number): Comment {
    return {
      id: response.id,
      postId: postId,
      senderUser: response.senderUser ? this._mapSenderUserApiResponse(response.senderUser) : undefined,
      content: response.content,
      repliesCounter: response.repliesCounter,
      createdDate: response.createdDate,
      replies: response.replies.map(reply => this._mapCommentApiResponseToComment(reply, postId))
    };
  }

  private _mapSenderUserApiResponse(senderUserApiResponse: SenderUserApiResponseModel): User {
    return {
      id: senderUserApiResponse.id,
      accountId: senderUserApiResponse.accountId,
      username: senderUserApiResponse.username,
      firstName: senderUserApiResponse.firstName,
      lastName: senderUserApiResponse.lastName,
      createdDate: senderUserApiResponse.createdDate
    };
  }

  private _mapCommentsApiResponseToComments(commentsApiResponse: CommentApiResponse[], postId: number): Comment[] {
    return commentsApiResponse.map(commentApiResponse =>
      this._mapCommentApiResponseToComment(commentApiResponse, postId)
    );
  }

  private _handleError(error: HttpErrorResponse): Observable<never> {
    console.error("comment-service, error in request")
    const errorResponse: ApiErrorResponse  = {
      ...error.error
    };
    return throwError(errorResponse);
  }
}

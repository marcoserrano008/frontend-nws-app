import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Post} from "@nwsState/models/post.model";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {BulletinApiResponse} from "@core/models/http/bulletin-api-response.model";
import {PageableResponse} from "@core/models/http/pageable-response.model";
import {catchError, map, tap} from "rxjs/operators";
import {CreateBulletinApiRequestModel} from "@core/models/http/create-bulletin-api-request.model";
import {ApiErrorResponse} from "@core/models/http/api-error-response.model";
import {AlertService} from "@core/services/alert.service";
import {AUTH_MESSAGES} from "@core/constants/nws-auth-messages.constants";
import {AlertType} from "@core/enums/nws-alert-type.enum";
import {POSTS_MESSAGES} from "@core/constants/nws-posts-messages.constants";

@Injectable()
export class PostsService {

  private _apiUrl: string = '/news-service';

  constructor(private _http: HttpClient, private _alertService: AlertService) {
  }

  public getPosts(page: number = 0, size: number = 8, body: string = ''): Observable<Post[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('body', body);

    const headers = new HttpHeaders({
      'skipAuth': 'true'
    });

    return this._http.get<PageableResponse<BulletinApiResponse>>(`${this._apiUrl}/public/bulletins`, { params, headers }).pipe(
      map(response => this._mapBulletinsToPosts(response.content))
    );
  }

  public postBulletin(request: CreateBulletinApiRequestModel): Observable<BulletinApiResponse> {
    const formData: FormData = new FormData();
    formData.append('body', request.body);

    if (request.attachments !== undefined) {
      request.attachments.forEach(attachment => {
        formData.append('attachments', attachment, attachment.name);
      })
    }
    return this._http.post<BulletinApiResponse>(`${this._apiUrl}/bulletins`, formData)
      .pipe(
        tap(() => this._alertService.showAlert(POSTS_MESSAGES.POST_CREATE_SUCCESS)),
        catchError(error => {
          this._alertService.showAlert(POSTS_MESSAGES.POST_CREATE_ERROR, AlertType.ERROR);
          return this._handleError(error)
        })
      );
  }

  private _mapBulletinsToPosts(bulletins: BulletinApiResponse[]): Post[] {
    return bulletins.map(bulletin => ({
      id: bulletin.id,
      accountId: bulletin.accountId,
      senderUser: {
        id: bulletin.senderUser.id,
        accountId: bulletin.senderUser.accountId,
        username: bulletin.senderUser.username,
        firstName: bulletin.senderUser.firstName,
        lastName: bulletin.senderUser.lastName,
        createdDate: bulletin.senderUser.createdDate
      },
      body: bulletin.body,
      createdDate: bulletin.createdDate,
      commentsCounter: bulletin.commentsCounter,
      attachments: bulletin.attachments.map(attachment => ({
        id: attachment.id,
        size: attachment.size,
        name: attachment.name,
        field: attachment.field,
        mimeType: attachment.mimeType
      })),
      comments: []
    }));
  }

  private _handleError(error: HttpErrorResponse): Observable<never> {
    console.error("posts-service, error in request")
    const errorResponse: ApiErrorResponse  = {
      ...error.error
    };
    return throwError(errorResponse);
  }
}

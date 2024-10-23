import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "@nwsState/models/user.model";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {LoginApiResponse} from "@core/models/http/login-api-response.model";
import {CreateUserRequestModel} from "@core/models/http/create-user-request.model";
import {ApiErrorResponse} from "@core/models/http/api-error-response.model";
import {AlertService} from "@core/services/alert.service";
import {AUTH_MESSAGES} from "@core/constants/nws-auth-messages.constants";
import {AlertType} from "@core/enums/nws-alert-type.enum";


@Injectable()
export class AuthService {
  private _baseUrl: string = '/user-service';
  private _tokenKey: string = 'authToken';

  constructor(private _http: HttpClient, private _alertService: AlertService) { }

  public login(username: string, password: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { username, password };

    return this._http
      .post<LoginApiResponse>(`${this._baseUrl}/auth/login`, body, { headers: headers })
      .pipe(
        map((response) => {
          this._saveToken(response.token);
          return {
            id: response.userDetail.id,
            accountId: response.userDetail.accountId,
            username: response.userDetail.username,
            firstName: response.userDetail.firstName,
            lastName: response.userDetail.lastName,
            createdDate: response.userDetail.createdDate,
          } as User;
        }),
        catchError(error => {
          this._alertService.showAlert(AUTH_MESSAGES.USER_LOGIN_FAILURE, AlertType.ERROR);
          return this._handleError(error);
        })
      );
  }

  public createUser(request: CreateUserRequestModel): Observable<User> {
    return this._http.post<User>(`${this._baseUrl}/users`, request)
      .pipe(
        tap(() => this._alertService.showAlert(AUTH_MESSAGES.USER_CREATED_SUCCESS)),
        catchError(error => this._handleError(error))
      );
  }

  private _saveToken(token: string): void {
    localStorage.setItem(this._tokenKey, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this._tokenKey);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    localStorage.removeItem(this._tokenKey);
  }

  private _handleError(error: HttpErrorResponse): Observable<never> {
    const errorResponse: ApiErrorResponse  = {
      ...error.error
    };
    return throwError(errorResponse);
  }
}

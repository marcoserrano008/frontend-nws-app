import { Component, OnInit } from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {CreateBulletinApiRequestModel} from "@core/models/http/create-bulletin-api-request.model";
import {CreateUserRequestModel} from "@core/models/http/create-user-request.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nws-signup',
  templateUrl: './nws-signup.component.html',
  styleUrls: ['./nws-signup.component.scss']
})
export class NwsSignupComponent implements OnInit {
  public name: string;
  public lastName: string;
  public username: string;
  public password: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.name = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  public createUser(): void {
    const postData: CreateUserRequestModel = this._buildUserRequest();
    this._authService.createUser(postData)
      .subscribe(
        response => {
          this._cleanForm();
          this._router.navigate(['/auth/login']);
        },
        error => {
          console.error('Error while creating user', error)
        }
      )
  }

  private _buildUserRequest(): CreateUserRequestModel {
    return  {
      accountId: 1,
      username: this.username,
      firstName: this.name,
      lastName: this.lastName,
      password: this.password,
    };
  }

  private _cleanForm(): void {
    this.name = '';
    this.username = '';
    this.lastName = '';
    this.password = '';
  }
}

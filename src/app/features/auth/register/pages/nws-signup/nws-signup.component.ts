import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {CreateUserRequestModel} from "@core/models/http/create-user-request.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nws-signup',
  templateUrl: './nws-signup.component.html',
  styleUrls: ['./nws-signup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsSignupComponent {
  public lastName: string;
  public name: string;
  public password: string;
  public username: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.lastName = '';
    this.name = '';
    this.password = '';
    this.username = '';
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

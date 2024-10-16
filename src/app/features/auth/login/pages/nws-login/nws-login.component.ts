import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import * as AuthActions from "@nwsState/actions/auth.actions"
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {selectAuthError, selectAuthLoading, selectUser} from "@nwsState/selectors/auth.selector";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-nws-login',
  templateUrl: './nws-login.component.html',
  styleUrls: ['./nws-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public user$: Observable<any>;

  constructor(private _store: Store, private _router: Router) {
    this.username = '';
    this.password = '';
    this.loading$ = this._store.select(selectAuthLoading);
    this.error$ = this._store.select(selectAuthError);
    this.user$ = this._store.select(selectUser);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this._router.navigate(['/news']);
      }
    });

    this.error$.subscribe(error => {
      if (error) {
        // alert('Error in login' + error.message);
      }
    });
  }

  public onLogin(): void {
    if (this.username && this.password) {
      this._store.dispatch(AuthActions.login({username: this.username, password: this.password}));
    } else {
      alert("Please fill in both fields");
    }
  }
}

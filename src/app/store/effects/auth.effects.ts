import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from "@nwsState/actions/auth.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {AuthService} from "@core/services/auth.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ username, password}) =>
        this.authService.login(username, password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }
}

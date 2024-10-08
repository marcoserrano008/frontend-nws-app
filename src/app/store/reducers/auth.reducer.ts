import {AuthState} from "@nwsState/state/auth.state";
import {createReducer, on} from "@ngrx/store";
import * as AuthActions from "@nwsState/actions/auth.actions";

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, {user}) => ({
    ...state,
    user,
    loading: false
  })),
  on(AuthActions.loginFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AuthActions.logout, state => ({
    ...state,
    user: null
  }))
);

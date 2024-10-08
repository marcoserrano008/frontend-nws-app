import {User} from "@nwsState/models/user.model";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
}

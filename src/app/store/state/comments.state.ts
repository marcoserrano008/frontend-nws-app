import { EntityState } from '@ngrx/entity';
import {Comment} from "@nwsState/models/comment.model";

export interface CommentsState extends EntityState<Comment> {
  loading: boolean;
  error: any;
}

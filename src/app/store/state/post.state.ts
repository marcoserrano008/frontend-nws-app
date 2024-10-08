import {Post} from "@nwsState/models/post.model";
import {EntityState} from "@ngrx/entity";

export interface PostsState extends EntityState<Post> {
  loading: boolean;
  error: any;
}

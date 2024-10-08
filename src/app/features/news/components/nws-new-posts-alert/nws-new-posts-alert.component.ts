import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import * as PostsActions from "@nwsState/actions/posts.actions";

@Component({
  selector: 'nws-new-posts-alert',
  templateUrl: './nws-new-posts-alert.component.html',
  styleUrls: ['./nws-new-posts-alert.component.scss']
})
export class NwsNewPostsAlertComponent implements OnInit, OnChanges {
  @Input() newPostsCounter!: number;
  @Output() postsReloaded: EventEmitter<void>;
  public isVisible: boolean;

  constructor(private _store: Store) {
    this.postsReloaded = new EventEmitter();
    this.isVisible = this.newPostsCounter > 0;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newPostsCounter'] && !changes['newPostsCounter'].isFirstChange()) {
      this.isVisible = this.newPostsCounter > 0;
    }
  }

  public reloadPosts(): void {
    this.postsReloaded.emit();
    this._store.dispatch(PostsActions.loadPosts( { body:'' } ));
    this.isVisible = false;
  }

  public closeAlert(): void {
    this.isVisible = false;
  }
}

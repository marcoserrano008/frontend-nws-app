import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Store} from "@ngrx/store";
import * as PostsActions from "@nwsState/actions/posts.actions";

@Component({
  selector: 'nws-new-posts-alert',
  templateUrl: './nws-new-posts-alert.component.html',
  styleUrls: ['./nws-new-posts-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsNewPostsAlertComponent implements OnChanges {
  @Input() newPostsCounter: number | null;

  @Output() postsReloaded: EventEmitter<void>;

  public isVisible: boolean;

  constructor(private _store: Store) {
    this.newPostsCounter = 0;
    this.postsReloaded = new EventEmitter();
    this.isVisible = this.newPostsCounter > 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newPostsCounter'] && !changes['newPostsCounter'].isFirstChange() && this.newPostsCounter) {
      this.isVisible = this.newPostsCounter > 0;
    }
  }

  public reloadPosts(): void {
    this.postsReloaded.emit();
    this._store.dispatch(PostsActions.loadPosts({body: ''}));
    this.isVisible = false;
  }

  public closeAlert(): void {
    this.isVisible = false;
  }
}

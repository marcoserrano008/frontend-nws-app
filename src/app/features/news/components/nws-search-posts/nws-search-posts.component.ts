import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from "rxjs";
import {AppState} from "@nwsState/app.state";
import {Store} from "@ngrx/store";
import * as PostsActions from "@nwsState/actions/posts.actions"
import {debounceTime, takeUntil} from "rxjs/operators";

@Component({
  selector: 'nws-search-posts',
  templateUrl: './nws-search-posts.component.html',
  styleUrls: ['./nws-search-posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsSearchPostsComponent implements OnInit, OnDestroy {
  private _searchSubject: Subject<string>;
  private readonly _destroy$: Subject<void>;

  constructor(private _store: Store<AppState>) {
    this._searchSubject = new Subject<string>();
    this._destroy$ =  new Subject<void>();
  }

  ngOnInit(): void {
    this._searchSubject.pipe(
      debounceTime(1000),
      takeUntil(this._destroy$)
    ).subscribe(searchText => {
      this._loadPosts(searchText);
    });
  }

  public onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._searchSubject.next(input.value);
  }

  private _loadPosts(searchText: string = ''): void {
    this._store.dispatch(PostsActions.loadPosts( { body: searchText }))
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

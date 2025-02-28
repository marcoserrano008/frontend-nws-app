import {ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as PostsActions from "@nwsState/actions/posts.actions"
import {Post} from "@nwsState/models/post.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {selectAllPosts} from "@nwsState/selectors/posts.selectors";
import {takeUntil} from "rxjs/operators";
import {Bulletin} from "@core/models/bulletin.model";
import {WsBulletinsService} from "@core/services/ws-bulletins.service";

@Component({
  selector: 'nws-news-feed',
  templateUrl: './nws-news-feed.component.html',
  styleUrls: ['./nws-news-feed.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsNewsFeedComponent implements OnInit, OnDestroy {
  public bulletins$: Observable<Post[]>;
  private _page: number;
  public loading: boolean;
  public isCreatePostModalOpen: boolean;
  public newBulletinsCounter$: BehaviorSubject<number>;
  private _destroy$: Subject<void>;

  constructor(private router: Router,
              private _store: Store,
              private _wsBulletinService: WsBulletinsService) {
    this.bulletins$ = new Observable;
    this._page = 0;
    this.isCreatePostModalOpen = false;
    this.loading = false;
    this.newBulletinsCounter$ = new BehaviorSubject<number>(0);
    this._destroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 100;

    if (scrollPosition >= threshold && !this.loading) {
      this._loadMorePosts();
    }
  }

  public toggleCreatePostModal(): void {
    this.isCreatePostModalOpen = !this.isCreatePostModalOpen;
  }

  public postCreated(): void {
    this.newBulletinsCounter$.next(this.newBulletinsCounter$.value - 1);
  }

  public postsReloaded(): void {
    this.newBulletinsCounter$.next(0);
  }

  private _initialize(): void {
    this._loadMorePosts();
    this._selectBulletins();

    this._wsBulletinService.bulletin$
      .pipe(takeUntil(this._destroy$))
      .subscribe((bulletin: Bulletin) => {
        this.newBulletinsCounter$.next(this.newBulletinsCounter$.value + 1);
        console.log("New bulletin in feed", bulletin);
      })
  }

  private _selectBulletins(): void {
    this.bulletins$ = this._store.select(selectAllPosts)
      .pipe(takeUntil(this._destroy$));
  }

  private _loadMorePosts(): void {
    if (this.loading) return;
    this.loading = true;
    this._store.dispatch(PostsActions.loadMorePosts({ page: this._page } ));
    this._page++;

    setTimeout(() => {
      this.loading = false;
    }, 500)
  }

  private _loadPosts(): void {
   this._store.dispatch(PostsActions.loadPosts( { body: '' } ));
  }

  private _finalize(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

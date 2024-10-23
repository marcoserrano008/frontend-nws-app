import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NwsNewsFeedComponent } from './pages/nws-news-feed/nws-news-feed.component';
import { NwsCreatePostComponent } from './pages/nws-create-post/nws-create-post.component';
import {SharedModule} from "@shared/shared.module";
import {CommentsModule} from "../comments/comments.module";
import {NwsSystemUiModule} from "@nws/system-ui";
import {FormsModule} from "@angular/forms";
import { NwsSearchPostsComponent } from './components/nws-search-posts/nws-search-posts.component';
import { NwsNewPostsAlertComponent } from './components/nws-new-posts-alert/nws-new-posts-alert.component';
import {WsBulletinsService} from "@core/services/ws-bulletins.service";


@NgModule({
  declarations: [
    NewsComponent,
    NwsNewsFeedComponent,
    NwsCreatePostComponent,
    NwsSearchPostsComponent,
    NwsNewPostsAlertComponent
  ],
  providers: [
    WsBulletinsService,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NwsSystemUiModule,
    SharedModule,
    CommentsModule,
    FormsModule
  ]
})
export class NewsModule { }

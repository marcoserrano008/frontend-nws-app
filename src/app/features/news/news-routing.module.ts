import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NwsNewsFeedComponent} from "./pages/nws-news-feed/nws-news-feed.component";
import {NwsCreatePostComponent} from "./pages/nws-create-post/nws-create-post.component";
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: NwsNewsFeedComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

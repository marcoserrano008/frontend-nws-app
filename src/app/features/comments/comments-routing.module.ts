import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NwsCommentsComponent} from "./pages/nws-comments/nws-comments.component";
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  { path: 'post/:id',
    component: NwsCommentsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }

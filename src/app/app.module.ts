import {APP_INITIALIZER, isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "@shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authReducer} from "@nwsState/reducers/auth.reducer";
import {commentsReducer} from "@nwsState/reducers/comments.reducer";
import {postsReducer} from "@nwsState/reducers/posts.reducer";
import {AuthEffects} from "@nwsState/effects/auth.effects";
import {PostsEffects} from "@nwsState/effects/post.effects";
import {CommentsEffects} from "@nwsState/effects/comments.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {AuthInterceptor} from "@core/interceptors/auth.interceptor";
import {AuthService} from "@core/services/auth.service";
import {AlertService} from "@core/services/alert.service";
import {CommentsService} from "@core/services/comments.service";
import {PostsService} from "@core/services/posts.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      auth: authReducer,
      posts: postsReducer,
      comments: commentsReducer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      PostsEffects,
      CommentsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      name: `News App - ${isDevMode() ? 'Development' : 'Production'}`,
      logOnly: !isDevMode()
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    AlertService,
    CommentsService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

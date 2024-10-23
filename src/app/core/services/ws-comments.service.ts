import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Comment} from "@nwsState/models/comment.model";
import {WebSocketService} from "@core/services/web-socket.service";
import {map} from "rxjs/operators";

@Injectable()
export class WsCommentsService {
  constructor(private webSocketService: WebSocketService) {
  }

  public getCommentStream(bulletinId: number): Observable<Comment> {
    return this.webSocketService.watch(`/topic/comments/${bulletinId}`)
      .pipe(
        map((message) => JSON.parse(message.body) as Comment)
      )
  }
}

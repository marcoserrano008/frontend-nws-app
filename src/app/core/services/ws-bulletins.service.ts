import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Bulletin} from "@core/models/bulletin.model";
import {WebSocketService} from "@core/services/web-socket.service";
import {map} from "rxjs/operators";

@Injectable()
export class WsBulletinsService {
  public bulletin$: Observable<Bulletin>;

  constructor(private webSocketService: WebSocketService) {
    this.bulletin$ = this.webSocketService.watch('/topic/bulletins').pipe(
      map((message) => JSON.parse(message.body) as Bulletin)
    );
  }
}

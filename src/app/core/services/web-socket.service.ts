import { Injectable } from '@angular/core';
import {Client, Frame, IMessage, StompSubscription} from "@stomp/stompjs";
import * as SockJS from 'sockjs-client';
import {BehaviorSubject, Observable} from "rxjs";
import {filter, share, switchMap, take} from "rxjs/operators";

@Injectable()
export class WebSocketService {
  private _stompClient: Client;
  private _topics: { [key: string]: Observable<IMessage> };
  private _connectionState$: BehaviorSubject<boolean>;

  constructor() {
    this._stompClient = new Client();
    this._topics = {};
    this._connectionState$ = new BehaviorSubject<boolean>(false);
    this._stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8090/ws-bulletin'),
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: (frame: Frame) => {
        console.log("connected: ", frame);
        this._connectionState$.next(true);
      }
    });
    this._stompClient.activate();
  }

  public watch(topic: string): Observable<IMessage> {
    if (!this._topics[topic]) {
      this._topics[topic] = this._connectionState$.pipe(
        filter(connected => connected === true),
        take(1),
        switchMap(() => {
          return new Observable<IMessage>((observer) => {
            const subscription: StompSubscription = this._stompClient.subscribe(
              topic,
              (message) => observer.next(message)
            );
            return () => {
              subscription.unsubscribe();
            };
          });
        }),
        share()
      );
    }
    return this._topics[topic];
  }
}

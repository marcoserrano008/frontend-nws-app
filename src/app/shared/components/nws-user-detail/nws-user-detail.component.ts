import {Component, Input, OnInit} from '@angular/core';
import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";

@Component({
  selector: 'nws-user-detail',
  templateUrl: './nws-user-detail.component.html',
  styleUrls: ['./nws-user-detail.component.scss']
})
export class NwsUserDetailComponent {

  @Input() userDetail!: SenderUserApiResponseModel;
  @Input() information!: string;

  constructor() {
  }
}

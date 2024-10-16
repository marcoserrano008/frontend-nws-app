import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";

@Component({
  selector: 'nws-user-detail',
  templateUrl: './nws-user-detail.component.html',
  styleUrls: ['./nws-user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsUserDetailComponent {

  @Input() userDetail!: SenderUserApiResponseModel;
  @Input() information!: string;

  constructor() {
  }
}

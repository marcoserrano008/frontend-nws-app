import {Component, Input, OnInit} from '@angular/core';
import {Bulletin} from "@core/models/bulletin.model";
import {mockBulletin} from "@core/utils/mocks/mock-bulletin";
import {BulletinApiResponse} from "@core/models/http/bulletin-api-response.model";

@Component({
  selector: 'nws-post',
  templateUrl: './nws-post.component.html',
  styleUrls: ['./nws-post.component.scss']
})
export class NwsPostComponent implements OnInit {

  @Input() bulletin!: Bulletin;

  constructor() {
  }

  ngOnInit(): void {
  }

}

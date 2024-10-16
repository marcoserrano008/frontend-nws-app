import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Bulletin} from "@core/models/bulletin.model";
import {mockBulletin} from "@core/utils/mocks/mock-bulletin";
import {BulletinApiResponse} from "@core/models/http/bulletin-api-response.model";

@Component({
  selector: 'nws-post',
  templateUrl: './nws-post.component.html',
  styleUrls: ['./nws-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsPostComponent {
  @Input() bulletin!: Bulletin;

  constructor() {
  }

  imageUrls = [
    'https://images.freeimages.com/images/large-previews/a16/leaf-1197355.jpg',
    'https://images.freeimages.com/images/large-previews/d2c/water-1182071.jpg',
    'https://images.freeimages.com/images/large-previews/14d/leaf-in-autumn-1453894.jpg',
    'https://images.freeimages.com/images/large-previews/794/joyful-black-dog-by-water-0410-5697273.jpg'
  ]
}

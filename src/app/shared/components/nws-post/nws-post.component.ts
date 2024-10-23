import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Bulletin} from "@core/models/bulletin.model";
import {mockBulletin} from "@core/utils/mocks/mock-bulletin";
import {BulletinApiResponse} from "@core/models/http/bulletin-api-response.model";
import {Attachment} from "@nwsState/models/attachment.model";

@Component({
  selector: 'nws-post',
  templateUrl: './nws-post.component.html',
  styleUrls: ['./nws-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsPostComponent implements OnChanges {
  @Input() bulletin!: Bulletin;

  public files: Attachment[];
  public imagesUrls: string[];

  constructor() {
    this.files = [];
    this.imagesUrls = [];
  }

  ngOnChanges(): void {
    if (this.bulletin?.attachments) {
      this._filterAttachments();
    }
  }

  private _filterAttachments(): void {
    const imageMimeTypes = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
      'image/bmp',
      'image/webp',
      'image/svg+xml',
      'image/tiff',
      'image/heic',
      'image/heif'
    ];

    this.imagesUrls = this.bulletin.attachments
      .filter(attachment => imageMimeTypes.includes(attachment.mimeType))
      .map(image => this._generateImageUrl(image.field));

    this.files = this.bulletin.attachments.filter(attachment =>
      !imageMimeTypes.includes(attachment.mimeType)
    );
  }

  private _generateImageUrl(id: string): string {
    return `http://localhost:8092/file/${id}/download`;
  }
}

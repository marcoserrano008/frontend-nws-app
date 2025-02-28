import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Attachment} from "@core/models/attachment.model";

@Component({
  selector: 'nws-file-detail',
  templateUrl: './nws-file-detail.component.html',
  styleUrls: ['./nws-file-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsFileDetailComponent implements OnInit {
  @Input() attachment!: Attachment;

  public fileDownloadUrl: string;

  constructor() {
    this.fileDownloadUrl = '';
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.fileDownloadUrl = `http://localhost:8092/file/${this.attachment.field}/download`
  }
}

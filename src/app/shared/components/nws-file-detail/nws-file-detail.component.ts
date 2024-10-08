import {Component, Input, OnInit} from '@angular/core';
import {Attachment} from "@core/models/attachment.model";

@Component({
  selector: 'nws-file-detail',
  templateUrl: './nws-file-detail.component.html',
  styleUrls: ['./nws-file-detail.component.scss']
})
export class NwsFileDetailComponent implements OnInit {
  @Input() attachment!: Attachment;

  constructor() {
  }

  ngOnInit(): void {
  }

}

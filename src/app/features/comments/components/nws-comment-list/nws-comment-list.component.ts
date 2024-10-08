import {Component, Input, OnInit} from '@angular/core';
import {CommentApiResponse} from "@core/models/http/comment-api-response.model";
import {Comment} from "@nwsState/models/comment.model";

@Component({
  selector: 'nws-comment-list',
  templateUrl: './nws-comment-list.component.html',
  styleUrls: ['./nws-comment-list.component.scss']
})
export class NwsCommentListComponent implements OnInit {

  @Input() comments!: Comment[];

  constructor() {
    this.comments = [];
  }

  ngOnInit(): void {
  }

  public trackByCommentId(index: number, comment: Comment): number {
    return comment.id;
  }
}

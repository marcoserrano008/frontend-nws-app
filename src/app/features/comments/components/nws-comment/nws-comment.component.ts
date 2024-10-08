import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "@nwsState/models/comment.model";

@Component({
  selector: 'nws-comment',
  templateUrl: './nws-comment.component.html',
  styleUrls: ['./nws-comment.component.scss']
})
export class NwsCommentComponent implements OnInit {
  @Input() comment!: Comment;

  public showReplies: boolean;
  public showReplyInput: boolean;

  constructor(private _route: ActivatedRoute) {
    this.showReplies = false;
    this.showReplyInput = false;
  }

  ngOnInit(): void {
  }

  public toggleReplies(): void {
    this.showReplies = !this.showReplies;
  }

  public toggleShowReplyInput(): void {
    this.showReplyInput = !this.showReplyInput;
  }

  public trackByCommentId(index: number, comment: Comment): number {
    return comment.id;
  }
}

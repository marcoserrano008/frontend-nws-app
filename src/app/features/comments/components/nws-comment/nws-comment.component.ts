import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Comment} from "@nwsState/models/comment.model";

@Component({
  selector: 'nws-comment',
  templateUrl: './nws-comment.component.html',
  styleUrls: ['./nws-comment.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsCommentComponent implements OnInit {
  @Input() comment!: Comment;

  public showReplies: boolean;
  public showReplyInput: boolean;

  constructor(private _renderer: Renderer2,
              private elementRef: ElementRef) {
    this.showReplies = false;
    this.showReplyInput = false;
  }

  ngOnInit(): void {
    this._initialize();
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

  private _initialize(): void {
    this._renderer.addClass(this.elementRef.nativeElement, 'nws-animate-comment');
  }
}

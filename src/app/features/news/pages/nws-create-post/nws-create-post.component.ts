import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PostsService} from "@core/services/posts.service";
import {CreateBulletinApiRequestModel} from "@core/models/http/create-bulletin-api-request.model";
import * as PostsActions from "@nwsState/actions/posts.actions"
import {Store} from "@ngrx/store";

@Component({
  selector: 'nws-create-post',
  templateUrl: './nws-create-post.component.html',
  styleUrls: ['./nws-create-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsCreatePostComponent {
  @Output() closeModal: EventEmitter<void>;
  @Output() postCreated: EventEmitter<void>;

  public files: File[];
  public postContent: string;

  constructor(private _postsService: PostsService, private _store: Store) {
    this.closeModal = new EventEmitter();
    this.postCreated = new EventEmitter();
    this.files = [];
    this.postContent = '';
  }

  public close(): void {
    this.closeModal.emit();
  }

  public onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.files.push(file);
    }
  }

  public removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  public createPost(): void {
    if (!this.postContent) {
      console.log("You can't create an empty post")
      return;
    }
    const postData: CreateBulletinApiRequestModel = {
      body: this.postContent,
      attachments: this.files,
    };

    this._postsService.postBulletin(postData)
      .subscribe(
        response => {
          this._reloadPosts();
          this.postCreated.emit();
          this.close();
          this._cleanForm();
        },
        error => {
          console.error('Error while creating post', error)
        }
      )
  }

  private _reloadPosts(): void {
    this._store.dispatch(PostsActions.loadPosts( { body:'' } ));
  }

  private _cleanForm(): void {
    this.postContent = '';
    this.files = [];
  }
}

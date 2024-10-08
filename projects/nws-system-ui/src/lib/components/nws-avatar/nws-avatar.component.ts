import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'nws-avatar',
  templateUrl: './nws-avatar.component.html',
  styleUrls: ['./nws-avatar.component.scss']
})
export class NwsAvatarComponent implements OnInit {

  @Input() avatarTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-avatar',
  templateUrl: './nws-avatar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsAvatarComponent implements OnInit {

  @Input() avatarTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

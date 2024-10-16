import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-floating-menu',
  templateUrl: './nws-floating-menu.component.html',
  styleUrls: ['./nws-floating-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsFloatingMenuComponent {

  constructor() { }
}

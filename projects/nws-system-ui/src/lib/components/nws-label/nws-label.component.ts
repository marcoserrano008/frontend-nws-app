import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-label',
  templateUrl: './nws-label.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsLabelComponent  {
  @Input() label!: string;

  constructor() { }
}

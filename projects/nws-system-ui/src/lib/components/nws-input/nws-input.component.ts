import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-input',
  templateUrl: './nws-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsInputComponent {

  @Input() placeholder: string = '';
  @Input() value: string = '';

  constructor() { }
}

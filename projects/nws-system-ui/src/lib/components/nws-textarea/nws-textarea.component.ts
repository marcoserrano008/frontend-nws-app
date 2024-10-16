import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-textarea',
  templateUrl: './nws-textarea.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

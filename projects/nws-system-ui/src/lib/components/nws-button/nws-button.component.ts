import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-button',
  templateUrl: './nws-button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

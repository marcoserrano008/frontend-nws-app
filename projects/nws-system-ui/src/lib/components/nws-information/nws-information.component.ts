import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-information',
  templateUrl: './nws-information.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

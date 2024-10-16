import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-nws-dialog',
  templateUrl: './nws-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

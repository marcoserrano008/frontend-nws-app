import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-file-info',
  templateUrl: './nws-file-info.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsFileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

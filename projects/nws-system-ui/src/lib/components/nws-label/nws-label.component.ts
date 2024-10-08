import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nws-label',
  templateUrl: './nws-label.component.html',
  styleUrls: ['./nws-label.component.scss']
})
export class NwsLabelComponent  {
  @Input() label!: string;

  constructor() { }
}

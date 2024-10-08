import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nws-input',
  templateUrl: './nws-input.component.html',
  styleUrls: ['./nws-input.component.scss']
})
export class NwsInputComponent {

  @Input() placeholder: string = '';
  @Input() value: string = '';

  constructor() { }
}

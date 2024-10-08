import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nws-alert',
  templateUrl: './nws-alert.component.html',
  styleUrls: ['./nws-alert.component.scss']
})
export class NwsAlertComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() style: string;
  public icon: string;
  public iconColor: string;
  public showAlert: boolean;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.title = '';
    this.description = '';
    this.style = '';
    this.icon = 'check';
    this.iconColor = '#107C10';
    this.showAlert = true;
  }

  ngOnInit(): void {
    this._setIcon();
    this._closeAutomatically();
  }

  private _setIcon(): void {
    if (this.style === 'success') {
      this.icon = 'check';
      this.iconColor = '#107C10';
    } else if (this.style === 'error') {
      this.icon = 'cancel';
      this.iconColor = '#C50F1F';
    }
  }

  private _closeAutomatically(): void {
    setTimeout(() => {
      this.closeAlert();
    }, 5000);
  }

  public closeAlert(): void {
    this.showAlert = false;
    this.changeDetectorRef.detectChanges();
  }
}

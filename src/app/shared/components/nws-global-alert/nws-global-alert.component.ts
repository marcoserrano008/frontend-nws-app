import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NwsAlert} from "@core/models/nws-alert.model";
import {AlertType} from "@core/enums/nws-alert-type.enum";
import {AlertService} from "@core/services/alert.service";

@Component({
  selector: 'nws-global-alert',
  templateUrl: './nws-global-alert.component.html',
  styleUrls: ['./nws-global-alert.component.scss']
})
export class NwsGlobalAlertComponent {
  public alerts$: Observable<NwsAlert[]>;
  public AlertType = AlertType;

  constructor(private _alertService: AlertService) {
    this.alerts$ = this._alertService.getCurrentAlerts();
  }

  public closeAlert(index: number): void {
    this._alertService.hideAlertAtIndex(index);
  }
}

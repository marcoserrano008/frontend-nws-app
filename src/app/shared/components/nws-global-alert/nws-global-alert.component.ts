import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {NwsAlert} from "@core/models/nws-alert.model";
import {AlertType} from "@core/enums/nws-alert-type.enum";
import {AlertService} from "@core/services/alert.service";

@Component({
  selector: 'nws-global-alert',
  templateUrl: './nws-global-alert.component.html',
  styleUrls: ['./nws-global-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsGlobalAlertComponent implements OnDestroy {
  public alerts$: Observable<NwsAlert[]>;
  public AlertType = AlertType;

  private destroy$: Subject<void>;

  constructor(private _alertService: AlertService) {
    this.alerts$ = this._alertService.getCurrentAlerts();
    this.destroy$ = new Subject<void>();
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public closeAlert(index: number): void {
    this._alertService.hideAlertAtIndex(index);
  }

  private _finalize(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

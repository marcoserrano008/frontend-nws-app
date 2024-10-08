import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {NwsAlert} from "@core/models/nws-alert.model";
import {AlertType} from "@core/enums/nws-alert-type.enum";

@Injectable()
export class AlertService {
  private readonly alertDuration: number = 5000;
  public currentAlerts$: BehaviorSubject<NwsAlert[]>;

  constructor() {
    this.currentAlerts$ = new BehaviorSubject<NwsAlert[]>([]);
  }

  public showAlert(message: string, alertType: AlertType = AlertType.SUCCESS): void {
    const newAlert: NwsAlert = {
      visible: true,
      message: message,
      type: alertType,
    };

    const currentAlerts = this.currentAlerts$.value;
    this.currentAlerts$.next([...currentAlerts, newAlert]);

    setTimeout(() => {
      this.removeAlertAtIndex(this.currentAlerts$.value.length - 1);
    }, this.alertDuration);
  }

  public hideAlertAtIndex(index: number): void {
    const currentAlerts = this.currentAlerts$.value;
    if (index >= 0 && index < currentAlerts.length) {
      const updatedAlerts = [...currentAlerts];
      updatedAlerts[index].visible = false;
      this.currentAlerts$.next(updatedAlerts);
      setTimeout(() => {
        this.removeAlertAtIndex(index);
      }, 100);
    }
  }

  private removeAlertAtIndex(index: number): void {
    const currentAlerts = this.currentAlerts$.value.filter((_, i) => i !== index);
    this.currentAlerts$.next(currentAlerts);
  }

  public getCurrentAlerts(): Observable<NwsAlert[]> {
    return this.currentAlerts$.asObservable();
  }
}

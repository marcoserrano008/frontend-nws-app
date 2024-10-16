import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "@nwsState/models/user.model";
import {selectUser} from "@nwsState/selectors/auth.selector";
import {logout} from "@nwsState/actions/auth.actions";
import {AuthService} from "@core/services/auth.service";

@Component({
  selector: 'nws-header',
  templateUrl: './nws-header.component.html',
  styleUrls: ['./nws-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsHeaderComponent {
  public isFloatingMenuVisible: boolean;

  constructor(private _router: Router, private _authService: AuthService) {
    this.isFloatingMenuVisible = false;
  }

  public toggleFloatingMenu(): void {
    this.isFloatingMenuVisible = !this.isFloatingMenuVisible;
  }

  public logout(): void {
    this.toggleFloatingMenu();
    this._authService.logout();
    this._router.navigate(['/auth/login']);
  }
}

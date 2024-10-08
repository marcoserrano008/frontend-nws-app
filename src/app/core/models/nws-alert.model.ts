import {AlertType} from "@core/enums/nws-alert-type.enum";

export interface NwsAlert {
  message: string,
  type: AlertType,
  visible: boolean
}

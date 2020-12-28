import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AlertService {
  is_active = new BehaviorSubject(false);
  current_is_active = this.is_active.asObservable();
  error = new BehaviorSubject("Error");
  msg_error = this.error.asObservable();
  constructor() {}
  setIsActiveValue(value) {
    this.is_active.next(value);
  }
  
  openAlert(title: string, msg: string, button: string, type: string) {
    let icon = "<span class='far fa-check-circle icon-ok'></span> ";
    switch (type) {
      case "ok":
        icon = "<span class='far fa-check-circle icon-ok'></span> ";
        break;
      case "error":
        icon = "<span class='far fa-times-circle icon-error'></span> ";
        break;
      default:
        icon = "<span class='far fa-times-circle icon-error'></span> ";
        break;
    }
    let data = icon + title + "|" + msg + "|" + button;
    this.error.next(data);
    this.setIsActiveValue(true);
  }
  closeAlert() {
    this.setIsActiveValue(false);
  }
}

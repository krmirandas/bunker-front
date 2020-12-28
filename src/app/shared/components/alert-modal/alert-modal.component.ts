import { Component, OnInit, Renderer2 } from "@angular/core";
import { AlertService } from "@shared/services/alert.service";
import { Router } from '@angular/router';

@Component({
  selector: "alert-modal",
  templateUrl: "./alert-modal.component.html",
  styleUrls: ["./alert-modal.component.scss"]
})
export class AlertModalComponent implements OnInit {
  msg: any;
  constructor(public alertService: AlertService, public renderer: Renderer2, private router: Router) {}
  ngOnInit() {
    let msg;
    this.alertService.msg_error.subscribe(msg_error => (msg = msg_error));
    this.msg = msg.split("|");
  }
  ngOnDestroy() {}
  setHTMLScroll(scroll_value: string): void {
    this.renderer.setStyle(
      document.getElementsByTagName("html")[0],
      "overflow",
      scroll_value
    );
  }
  closeModal() {
    this.alertService.closeAlert();
  }
  goTo(url){
    this.router.navigate([url]);
    this.closeModal();
  }
}

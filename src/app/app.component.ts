import {
  Component,
  OnInit,
  AfterContentChecked,
  ChangeDetectorRef
} from "@angular/core";
import { AlertService } from "@shared/services/alert.service";
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = "bunker-pet";
  alert_active: boolean = true;
  loader_active: boolean = false;

  constructor(
    private alertService: AlertService,
    private cdr: ChangeDetectorRef,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.alertService.current_is_active.subscribe(
      alert_status => (this.alert_active = alert_status)
    );
    this.loaderService.current_loading.subscribe(
      loader_status => (this.loader_active = loader_status)
    );
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}

import { AuthService } from "@modules/auth/auth.service";
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router, NavigationEnd } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "@environment/environment";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  providers: [AuthService, HeaderService],
})
export class HeaderComponent implements OnDestroy {
  user;
  year = new Date().getFullYear();

  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 768px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    if (sessionStorage.getItem("auth")) {
      const helper = new JwtHelperService();
      console.log(sessionStorage.getItem("auth"))
      const access_key = JSON.parse(sessionStorage.getItem("auth"));
      const jwt = access_key.access_token;
      this.user = { email: access_key.subject };
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logOut() {
    this.authService.logOut().subscribe(
      (response) => {
        localStorage.clear();
        this.authService.deleteToken();
        this.router.navigate(["/login"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getImage() {
    return this.headerService.getImageProfile();
  }
}

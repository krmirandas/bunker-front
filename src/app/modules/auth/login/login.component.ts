import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";
import { UUID } from "angular2-uuid";
import { Router } from "@angular/router";
import { Auth } from "../auth.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  private errorLogin: boolean = false;
  public isLoading = false;
  public device_uuid = UUID.UUID();
  public type = "customer";
  formLogin = this.formBuilder.group({
    email: ["", [Validators.required, ValidatorsFormService.emailValidator]],
    password: ["", Validators.required],
  });
  login_form_submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.formLogin.get("email");
    this.formLogin.get("password");
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }

  login() {
    this.login_form_submitted = true;
    this.errorLogin = false;
    if (this.formLogin.valid) {
      this.isLoading = true;
      let login_data = {
        email: this.formLogin.controls.email.value,
        password: this.formLogin.controls.password.value,
        device_uuid: this.device_uuid,
        type: this.type,
      };
      this.authService.loginWithParams(login_data).subscribe(
        (data) => {
          console.log(data);

          sessionStorage.setItem("auth", JSON.stringify(data));
          localStorage.setItem("device_uuid", this.device_uuid);
          localStorage.setItem("currentUser", JSON.stringify(data["admin"]));
          const access_key = data["access_key"];
          access_key.type = this.type;
          const newData = JSON.stringify(access_key);
          localStorage.setItem("accessKey", newData);
          this.router.navigate(["/dashboard/customer"]);
        },
        (error) => {
          this.throwError(error);
        }
      );
    }
  }

  throwError(error) {
    this.isLoading = false;
  }
}

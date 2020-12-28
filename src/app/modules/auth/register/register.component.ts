import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";
import { UUID } from "angular2-uuid";
import { Router } from "@angular/router";
import { Auth } from "../auth.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  private errorLogin: boolean = false;
  public isLoading = false;
  public type = "customer";
  public device_uuid = UUID.UUID();
  formRegister = this.formBuilder.group({
    email: ["", [Validators.required, ValidatorsFormService.emailValidator]],
    password: ["", Validators.required],
    password_confirmation: ["", Validators.required],
    name: ["", Validators.required],
    last_name: ["", Validators.required],
    gender: ["", Validators.required]
  });
  login_form_submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.formRegister.get('email');
    this.formRegister.get('password');
    this.formRegister.get('password_confirmation');
    this.formRegister.get('name');
    this.formRegister.get('last_name');
    this.formRegister.get('gender');
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }

  register() {
    this.login_form_submitted = true;
    console.log(this.formRegister)
    if (this.formRegister.valid) {
      this.isLoading = true;
      let register_data = {
        email: this.formRegister.controls.email.value,
        password: this.formRegister.controls.password.value,
        password_confirmation: this.formRegister.controls.password_confirmation.value,
        name: this.formRegister.controls.name.value,
        last_name: this.formRegister.controls.last_name.value,
        gender: this.formRegister.controls.gender.value,
        device_uuid: this.device_uuid,
        type: this.type,
      };
      this.authService.registerWithParams(register_data).subscribe(
        (data) => {
          this.authService.loginWithParams(register_data).subscribe(
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
        },
        (error) => {
          console.log(error)
          this.throwError(error);
        }
      );
    }
  }

  throwError(error) {
    console.log(error)
    this.isLoading = false;
  }
}

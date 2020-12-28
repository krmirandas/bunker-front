import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";
import { UUID } from "angular2-uuid";
import { Router } from "@angular/router";
import { Auth } from "../auth.model";

@Component({
  selector: "app-register-pet-sitter",
  templateUrl: "./register-pet-sitter.component.html",
  styleUrls: ["./register-pet-sitter.component.scss"],
  providers: [AuthService],
})
export class RegisterPetSitterComponent implements OnInit {
  private errorLogin: boolean = false;
  public isLoading = false;
  public device_uuid = UUID.UUID();
  public type = "petsitter";
  formRegister = this.formBuilder.group({
    email: ["", [Validators.required, ValidatorsFormService.emailValidator]],
    password: ["", Validators.required],
    password_confirmation: ["", Validators.required],
    name: ["", Validators.required],
    city: ["", Validators.required],
    phone: ["", Validators.required],
    last_name: ["", Validators.required],
    gender: ["", Validators.required],
    identification: [undefined],
    image: [undefined],
  });
  imageSrc = "";
  identificationSrc = "";
  login_form_submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // this.formRegister.get('email');
    // this.formRegister.get('password');
    // this.formRegister.get('password_confirmation');
    // this.formRegister.get('name');
    // this.formRegister.get('last_name');
    // this.formRegister.get('gender');
    // this.formRegister.get('identification');
    // this.formRegister.get('image');
  }

  setImageValue(e: any): void {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = (eventImage: any) => {
      const img = new Image();
      img.onload = () => {
        this.formRegister.get("image").setValue(file);
        this.imageSrc = img.src;
      };
      img.src = eventImage.target.result;
    };
    console.log(file);
    reader.readAsDataURL(file);
  }

  setIdentificationValue(e: any): void {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = (eventImage: any) => {
      const img = new Image();
      img.onload = () => {
        this.formRegister.get("identification").setValue(file);
        this.imageSrc = img.src;
      };
      img.src = eventImage.target.result;
    };
    console.log(file);
    reader.readAsDataURL(file);
  }

  getUserToSave(): any {
    const user = new FormData();
    user.append("name", this.formRegister.get("name").value);
    user.append("last_name", this.formRegister.get("last_name").value);
    user.append("email", this.formRegister.get("email").value);
    user.append("city", this.formRegister.get("city").value);
    user.append("phone", this.formRegister.get("phone").value);
    user.append(
      "password_confirmation",
      this.formRegister.get("password_confirmation").value
    );
    user.append("password", this.formRegister.get("password").value);
    user.append("gender", this.formRegister.get("gender").value);
    if (this.formRegister.get("identification").value) {
      user.append(
        "identification",
        this.formRegister.get("identification").value
      );
    }
    if (this.formRegister.get("image").value) {
      user.append("image", this.formRegister.get("image").value);
    }
    return user;
  }

  register() {
    this.login_form_submitted = true;
    console.log(this.formRegister);
    if (this.formRegister.valid) {
      this.isLoading = true;
      const register_data = this.getUserToSave();
      let login_data = {
        email: this.formRegister.controls.email.value,
        password: this.formRegister.controls.password.value,
        device_uuid: this.device_uuid,
        type: this.type,
      };
      console.log("===========================");
      console.log(register_data);
      console.log("===========================");
      this.authService.registerPetSitter(register_data).subscribe(
        (data) => {
          this.authService.loginWithParams(login_data).subscribe(
            (data) => {
              console.log(data);

              sessionStorage.setItem("auth", JSON.stringify(data));
              localStorage.setItem("device_uuid", this.device_uuid);
              localStorage.setItem(
                "currentUser",
                JSON.stringify(data["admin"])
              );
              const access_key = data["access_key"];
              access_key.type = this.type;
              const newData = JSON.stringify(access_key);
              localStorage.setItem("accessKey", newData);
              this.router.navigate(["/dashboard/pet-sitter"]);
            },
            (error) => {
              this.throwError(error);
            }
          );
        },
        (error) => {
          console.log(error);
          this.throwError(error);
        }
      );
    }
  }

  throwError(error) {
    this.isLoading = false;
  }
}

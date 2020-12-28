import { Component, OnInit } from "@angular/core";
import { OnboardingService } from "./../onboarding.service";

@Component({
  selector: "app-onboarding-petsitter",
  templateUrl: "./onboarding-petsitter.component.html",
  styleUrls: ["./onboarding-petsitter.component.scss"],
})
export class OnboardingPetsitterComponent implements OnInit {
  user;
  petsitter_info = {};
  constructor(
    public service: OnboardingService
  ) {}

  ngOnInit() {
    const access_key = JSON.parse(sessionStorage.getItem("auth")).access_key;
    const user_info = JSON.parse(sessionStorage.getItem("auth")).petsitter;
    const jwt = access_key.access_token;
    this.user = { email: access_key.subject };
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
    this.getPetSitterInfo();
  }

  private getPetSitterInfo() {
    this.service.getPetSitterInfo().then(
      (data) => {
        console.log(data);
        this.petsitter_info = data;
      },
      (err) => console.error(err)
    );
  }
}

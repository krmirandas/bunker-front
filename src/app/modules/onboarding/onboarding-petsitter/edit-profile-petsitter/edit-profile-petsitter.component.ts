import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-profile-petsitter",
  templateUrl: "./edit-profile-petsitter.component.html",
  styleUrls: ["./edit-profile-petsitter.component.scss"],
})
export class EditProfilePetsitterComponent implements OnInit {
  user;
  petsitter_info;
  constructor() {}

  ngOnInit() {
    const access_key = JSON.parse(sessionStorage.getItem("auth")).access_key;
    const user_info = JSON.parse(sessionStorage.getItem("auth")).petsitter;
    const jwt = access_key.access_token;
    this.user = { email: access_key.subject };
    this.petsitter_info = {
      id: user_info.id,
      name: user_info.name,
      last_name: user_info.last_name,
      email: user_info.email,
      phone: user_info.phone,
      gender: user_info.gender,
      desc: user_info.description,
    };
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }
}

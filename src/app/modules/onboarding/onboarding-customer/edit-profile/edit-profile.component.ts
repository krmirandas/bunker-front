import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  user;
  customer_info;
  constructor() {}

  ngOnInit() {
    const access_key = JSON.parse(sessionStorage.getItem("auth")).access_key;
    const user_info = JSON.parse(sessionStorage.getItem("auth")).customer;
    const jwt = access_key.access_token;
    this.user = { email: access_key.subject };
    this.customer_info = {
      id: user_info.id,
      name: user_info.name,
      last_name: user_info.last_name,
      email: user_info.email,
      phone: user_info.phone,
      gender: user_info.gender,
    };
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }
}

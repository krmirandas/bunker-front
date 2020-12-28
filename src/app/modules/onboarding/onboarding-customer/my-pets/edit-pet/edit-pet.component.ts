import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-pet",
  templateUrl: "./edit-pet.component.html",
  styleUrls: ["./edit-pet.component.scss"],
})
export class EditPetComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }
}

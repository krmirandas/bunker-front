import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ListcuidadoresService } from "./listcuidadores.service";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";
import { Router } from "@angular/router";
import { VerPerfilComponent } from "./../ver-perfil/ver-perfil.component";

@Component({
  selector: "app-listcuidadores",
  templateUrl: "./listcuidadores.component.html",
  styleUrls: ["./listcuidadores.component.scss"],
})
export class ListcuidadoresComponent implements OnInit {
  public petsitters: any = [];
  public information = {};
  public services: any = [];
  public packages: any = [];
  public name: string;
  public email: string;

  constructor(
    public service: ListcuidadoresService,
    public router: Router,
    public component: ListcuidadoresService
  ) {}

  ngOnInit() {
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
    this.getPetsitters();
  }

  private getPetsitters() {
    this.service.getPetsitters().then(
      (data) => {
        console.log(data);
        this.petsitters = data.petsitters;
      },
      (err) => console.error(err)
    );
  }

  getUserInfo(id) {
    this.component.getInfo(id).then(
      (data) => {
        console.log(data);
        this.information = data;
        this.services = data.services;
        this.packages = data.packages;
        this.name = data.name + " " + data.last_name;
        this.email = data.email;
      },
      (err) => console.error(err)
    );
  }
}

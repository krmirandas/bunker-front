import { Component, OnInit } from "@angular/core";
import { ListcuidadoresService } from "./../listcuidadores/listcuidadores.service";

@Component({
  selector: "app-ver-perfil",
  templateUrl: "./ver-perfil.component.html",
  styleUrls: ["./ver-perfil.component.scss"],
})
export class VerPerfilComponent implements OnInit {
  public information = {};
  public services: any = [];
  public packages: any = [];

  constructor(public service: ListcuidadoresService) {}

  ngOnInit() {
    console.log(this.information);
  }

  getUserInfo(id) {
    console.log(id);
    this.service.getInfo(id).then(
      (data) => {
        console.log(data);
        this.information = data;
        this.services = data.services;
        this.packages = data.packages;
      },
      (err) => console.error(err)
    );
  }
}

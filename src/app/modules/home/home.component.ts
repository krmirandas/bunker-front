import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "@shared/services/language.service";
import { HomeService } from "./home.service";
import { CookieService } from "ngx-cookie-service";
import { DomSanitizer } from "@angular/platform-browser";
import {
  NguCarouselConfig,
  NguCarousel,
} from "@shared/modules/ngu-carousel/public_api";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let nav = document.getElementById("nav");
    nav.classList.add("navbar-index");
  }
}

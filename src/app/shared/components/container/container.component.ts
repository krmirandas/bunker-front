import { Component, OnInit, Inject } from "@angular/core";
import { environment } from "@environment/environment";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@shared/services/language.service';
import { CurrencyService } from '@shared/services/currency.service';
import { BlockCurrencyService } from '@shared/services/block-currency-select.service';
import { DOCUMENT } from '@angular/common';
import { ContainerService } from './container.service';

@Component({
  selector: "container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"]
})
export class ContainerComponent implements OnInit {
  public infoContact: any = null;
  public infoCurrency: any = null;
  public infoBrand: any = null;
  public langSelected: any = null;
  public date: any = null;
  public year: any = null;
  mail: any;
  phone: any;
  currencyPlaceHolder: any = "";
  currencySelect: boolean = false;
  blockCurrency: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

  }


}

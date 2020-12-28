import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@environment/environment";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import { ObserverInterface } from '@observers/observer-interface'

@Injectable()
export class CurrencyService {

  selected_currency_type = new BehaviorSubject(null);
  current_selected_currency_type = this.selected_currency_type.asObservable();

  constructor(public http: HttpClient) { }

  setSelectedCurrency(currency_type) {
    this.selected_currency_type.next(currency_type);
  }

}

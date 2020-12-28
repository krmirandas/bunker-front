import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@environment/environment";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BlockCurrencyService {

  pay_status = new BehaviorSubject(false);
  pay_status_type = this.pay_status.asObservable();

  constructor(public http: HttpClient) { }

  setPayStatus(pay_type) {
    this.pay_status.next(pay_type);
  }

}

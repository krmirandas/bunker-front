import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@environment/environment";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import { ObserverInterface } from '@observers/observer-interface'

@Injectable()
export class TailormadeCitiesService {

  selected_cities_type = new BehaviorSubject(null);
  current_selected_cities_type = this.selected_cities_type.asObservable();

  constructor(public http: HttpClient) { }

  setSelectedCity(cities_type) {
    this.selected_cities_type.next(cities_type);
  }

}

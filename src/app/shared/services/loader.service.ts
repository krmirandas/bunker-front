import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class LoaderService {
  constructor() {}
  loading = new BehaviorSubject(false);
  current_loading = this.loading.asObservable();
  openLoader(){
    this.setLoading(true);
  }
  closeLoader(){
    this.setLoading(false);
  }
  setLoading(status){
    this.loading.next(status);
  }
}

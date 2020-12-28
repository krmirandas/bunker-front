import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environment/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContainerService {

  constructor(private http: HttpClient) {}
}

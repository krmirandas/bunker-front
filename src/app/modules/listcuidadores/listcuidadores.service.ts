import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "@environment/environment";
import { CustomHttp } from "@shared/helpers/custom/http";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpRequest,
} from "@angular/common/http";
import { JwtService } from "@modules/auth/jwt/jwt.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ListcuidadoresService {
  constructor(public http: HttpClient, public customHttp: CustomHttp) {}

  getPetsitters(): Promise<any> {
    console.log(environment.API.PET_SITTERS_ALL);
    return this.http
      .get<any>(environment.API.PET_SITTERS_ALL)
      .pipe(
        map(
          (resp) => {
            return resp;
          },
          (err) => {
            return err;
          }
        )
      )
      .toPromise();
  }

  getInfo(id): Promise<any> {
    return this.http
      .get<any>(environment.API.PET_SITTER + "/" + id)
      .pipe(
        map(
          (resp) => {
            return resp;
          },
          (err) => {
            return err;
          }
        )
      )
      .toPromise();
  }
}

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
export class MyPetsService {
  constructor(public http: HttpClient, public customHttp: CustomHttp) {}

  createPet(data) {
    return this.customHttp
      .post<any>(environment.API.PET, data, "customer")
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

  deletePet(id): Promise<any> {
    console.log(id);
    return this.customHttp
      .delete<any>(environment.API.PET + "/" + id, "customer")
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

  patchPet(data, id): Promise<any> {
    return this.customHttp
      .put<any>(environment.API.PET + "/" + id, data, "customer")
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

  getPets(): Promise<any> {
    console.log(environment.API.PETS);
    return this.customHttp
      .get<any>(environment.API.PETS, "customer")
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

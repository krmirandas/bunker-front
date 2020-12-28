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
export class MyServicesService {
  constructor(public http: HttpClient, public customHttp: CustomHttp) {}

  createService(data) {
    return this.customHttp
      .post<any>(environment.API.SERVICE, data, "petsitter")
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

  deleteService(id): Promise<any> {
    console.log(id);
    return this.customHttp
      .delete<any>(environment.API.SERVICE + "/" + id, "petsitter")
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

  patchServices(data, id): Promise<any> {
    return this.customHttp
      .patch<any>(environment.API.SERVICE + "/" + id, data, "petsitter")
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

  getServices(): Promise<any> {
    console.log(environment.API.SERVICES);
    return this.customHttp
      .get<any>(environment.API.SERVICES, "petsitter")
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

  /* PACKAGES */
  createPackage(data) {
    return this.customHttp
      .post<any>(environment.API.PACKAGE, data, "petsitter")
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

  deletePackage(id): Promise<any> {
    console.log(id);
    return this.customHttp
      .delete<any>(environment.API.PACKAGE + "/" + id, "petsitter")
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

  patchPackages(data, id): Promise<any> {
    return this.customHttp
      .put<any>(environment.API.PACKAGE + "/" + id, data, "petsitter")
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

  getPackages(): Promise<any> {
    console.log(environment.API.PACKAGES);
    return this.customHttp
      .get<any>(environment.API.PACKAGES, "petsitter")
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

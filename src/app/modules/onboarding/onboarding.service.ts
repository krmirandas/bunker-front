import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environment/environment";
import { map } from "rxjs/operators";
import { CustomHttp } from "@shared/helpers/custom/http";

@Injectable({
  providedIn: "root"
})
export class OnboardingService {
  constructor(
    private http: HttpClient,
    private customHttp: CustomHttp, ) { }

  getPetSitterInfo(): Promise<any> {
    return this.customHttp
      .get<any>(environment.API.PET_SITTER + '/perfile', "petsitter")
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

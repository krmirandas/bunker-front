import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from '@environment/environment';
import { CustomHttp } from "@shared/helpers/custom/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { JwtService } from '@modules/auth/jwt/jwt.service';



@Injectable({
  providedIn: "root"
})
export class HeaderService {
  constructor(
    private router: Router,
    public http: HttpClient,
    public customHttp: CustomHttp,
    private jwt: JwtService
  ) { }


  getImageProfile() {
    return this.customHttp.get(environment.API.CUSTOMER_IMAGE_URL, 'customer');
  }
}

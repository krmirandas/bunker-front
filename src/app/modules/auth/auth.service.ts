import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from '@environment/environment';
import { CustomHttp } from "@shared/helpers/custom/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { JwtService } from '@modules/auth/jwt/jwt.service';



@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private router: Router,
    public http: HttpClient,
    public customHttp: CustomHttp,
    private jwt: JwtService
  ) { }

  isAuthenticated(): boolean {
    // return localStorage.getItem("accessKey") != null && !this.isTokenExpired();
    return localStorage.getItem("accessKey") != null;
  }

  isPetSitter(): boolean {
    const accessKey = JSON.parse(localStorage.getItem("accessKey"))
    return accessKey.type === 'pet_sitter';
  }

  isCustomer(): boolean {
    const accessKey = JSON.parse(localStorage.getItem("accessKey"))
    return accessKey.type === 'customer';
  }

  isTokenExpired(): boolean {
    return JSON.parse(localStorage.getItem("accessKey")).expires_at != null || (localStorage.getItem("accessKey") == null && JSON.parse(localStorage.getItem("accessKey")).expires_at >= Date.now());
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  loginWithParams(params) {
    if (params.type === 'customer') {
      return this.http.post(environment.API.CUSTOMER_URL, params);
    } else if (params.type === 'petsitter') {
      return this.http.post(environment.API.PETSITTER_URL, params);
    }
  }

  logOut() {
    if (JSON.parse(sessionStorage.getItem("auth")).petsitter) {
      return this.customHttp.delete(environment.API.PETSITTER_URL, 'petsitter');
    }
    return this.customHttp.delete(environment.API.CUSTOMER_URL, 'customer');
  }

  registerWithParams(params) {
    console.log(params)
    if (params.type === 'customer') {
      return this.http.post(environment.API.CUSTOMERS, params);
    }
  }

  registerPetSitter(params) {
    return this.http.post(environment.API.PET_SITTERS, params);
  }
}

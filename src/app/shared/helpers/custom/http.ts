import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpRequest
} from "@angular/common/http";
import { JwtService } from "@modules/auth/jwt/jwt.service";

@Injectable({
  providedIn: "root"
})
export class CustomHttp {
  constructor(private http: HttpClient, private jwt: JwtService) {}

  createAuthorizationHeader(type) {
    let headers = new HttpHeaders();
    return headers.set("Authorization", "JWT " + this.jwt.generate(type));
  }

  get<T>(url, type) {
    let headers = this.createAuthorizationHeader(type);
    return this.http.get<T>(url, {
      headers: headers
    });
  }

  post<T>(url, data, type) {
    let headers = this.createAuthorizationHeader(type);
    return this.http.post<T>(url, data, {
      headers: headers
    });
  }

  delete<T>(url, type) {
    let headers = this.createAuthorizationHeader(type);
    return this.http.delete<T>(url, {
      headers: headers
    });
  }

  put<T>(url, data, type) {
    let headers = this.createAuthorizationHeader(type);
    return this.http.put<T>(url, data, {
      headers: headers
    });
  }

  patch<T>(url, data, type) {
    let headers = this.createAuthorizationHeader(type);
    return this.http.patch<T>(url, data, {
      headers: headers
    });
  }
}

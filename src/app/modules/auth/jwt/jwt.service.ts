import { Injectable } from "@angular/core";
import * as crypto from "crypto-js";
import base64url from "base64url";

@Injectable({
  providedIn: "root"
})
export class JwtService {

  private access_key: any;

  constructor() {
    this.getAccessKey();
  }

  private getAccessKey(){
    if (localStorage.getItem('accessKey')) {
      this.access_key = JSON.parse(localStorage.getItem('accessKey'));
    }else{
      //regresa a login
    }
  }

  private EncodeBase64URL(encodedBase64: string): string {
    encodedBase64 = base64url.fromBase64(encodedBase64);
    return encodedBase64;
  }

  public generate(type:string): string {
    this.getAccessKey();
    let header = {
      alg: "HS256",
      typ: "JWT"
    };

    let payload = {
      sub: this.access_key.subject,
      iat: Number(Math.floor(Date.now() / 1000) - 30),
      device_uuid: localStorage.getItem('device_uuid'),
      type: type
    };

    const encodedHeader = this.GenerateBase64Encoded(JSON.stringify(header));
    const encodedPayload = this.GenerateBase64Encoded(JSON.stringify(payload));

    var token = this.EncodeBase64URL(encodedHeader + "." + encodedPayload);

    let signature = crypto.HmacSHA256(token, this.access_key.secret);
    let signed = this.EncodeBase64URL(crypto.enc.Base64.stringify(signature));
    let JWT = token + "." + signed;
    return JWT;
  }

  private GenerateBase64Encoded(encodedString): string {
    const stringified = crypto.enc.Utf8.parse(encodedString);
    return crypto.enc.Base64.stringify(stringified);
  }
}

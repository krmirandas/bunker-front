import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private cookieService: CookieService) { }

  public setLang(): string{
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    return this.cookieService.get("language") || 'es';
  }

}

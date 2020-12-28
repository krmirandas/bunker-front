import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environment/environment";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class ModalGalleryService {
  /*
  private api_instagram_feed = environment.instagramAPI + environment.igAccessToken;

  constructor(
    public http: HttpClient,
  ) { }

  getFeed() {
    return this.http.get(this.api_instagram_feed)
      .map(resp => {
        let data = resp;
        return data;
      }, (err) => {
        return err;
      }
      ).toPromise();
  }*/
}

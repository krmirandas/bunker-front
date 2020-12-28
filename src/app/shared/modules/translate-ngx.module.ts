import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule, TranslateLoader, TranslatePipe, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule,
    TranslatePipe
  ],
  providers:[
    TranslateService
  ]
})
export class TranslateNgxModule {}

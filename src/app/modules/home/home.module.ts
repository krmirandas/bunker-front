import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateNgxModule } from '@shared/modules/translate-ngx.module';
import { NguCarouselModule } from '@shared/modules/ngu-carousel/public_api';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateNgxModule,
    NguCarouselModule
  ],
  entryComponents: []
})
export class HomeModule { }

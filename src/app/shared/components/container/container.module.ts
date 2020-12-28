import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateNgxModule } from '@shared/modules/translate-ngx.module';
import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    TranslateNgxModule,
    RouterModule
  ],
  exports:[ContainerComponent]
})
export class ContainerModule { }

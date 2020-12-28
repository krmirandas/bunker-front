import { NgModule} from "@angular/core";
import { CustomEllipsisPipe } from "./custom-ellipsis.pipe";
@NgModule({
  imports: [
  ],
  declarations: [ 
    CustomEllipsisPipe
  ],
  exports: [
    CustomEllipsisPipe
  ]
})
export class CustomEllipsisPipeModule {}
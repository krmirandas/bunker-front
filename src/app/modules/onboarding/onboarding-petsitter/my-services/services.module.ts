import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyServicesComponent } from './my-services.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MyServicesRoutingModule } from "./services-routing.module";
import { ControlMessagesModule } from '@shared/components/control-messages/control-messages.module';


@NgModule({
  imports: [
    CommonModule,
    MyServicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ControlMessagesModule
  ],
  declarations: [
    MyServicesComponent
  ]
})

export class MyServicesModule { }

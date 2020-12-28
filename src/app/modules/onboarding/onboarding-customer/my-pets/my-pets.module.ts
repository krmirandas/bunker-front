import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyPetsComponent } from "./my-pets.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlMessagesModule } from "@shared/components/control-messages/control-messages.module";
import { MyPetsRoutingModule } from "./my-pets-routing.module";

// import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
  // declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    MyPetsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ControlMessagesModule,
  ],
  declarations: [MyPetsComponent],
})
export class MyPetsModule {}

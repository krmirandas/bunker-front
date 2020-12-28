import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListcuidadoresComponent } from "./listcuidadores.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlMessagesModule } from "@shared/components/control-messages/control-messages.module";
import { ListcuidadoresRoutingModule } from "./listcuidadores-routing.module";

// import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
  // declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ListcuidadoresRoutingModule,
    ReactiveFormsModule,
    ControlMessagesModule,
  ],
  declarations: [ListcuidadoresComponent],
})
export class ListcuidadoresModule {}

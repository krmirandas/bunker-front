import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material";
import { LoginPetSitterRoutingModule } from "./login-pet-sitter-routing.module";
import { LoginPetSitterComponent } from "./login-pet-sitter.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlMessagesModule } from "@shared/components/control-messages/control-messages.module";

@NgModule({
  declarations: [LoginPetSitterComponent],
  imports: [
    CommonModule,
    LoginPetSitterRoutingModule,
    ReactiveFormsModule,
    ControlMessagesModule,
    MatDialogModule,
  ],
})
export class LoginPetSitterModule {}

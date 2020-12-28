import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material";
import { RegisterPetSitterRoutingModule } from "./register-pet-sitter-routing.module";
import { RegisterPetSitterComponent } from "./register-pet-sitter.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlMessagesModule } from "@shared/components/control-messages/control-messages.module";

@NgModule({
  declarations: [RegisterPetSitterComponent],
  imports: [
    CommonModule,
    RegisterPetSitterRoutingModule,
    ReactiveFormsModule,
    ControlMessagesModule,
    MatDialogModule,
  ],
})
export class RegisterPetsitterModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterPetSitterComponent } from './register-pet-sitter/register-pet-sitter.component';
// import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
  // declarations: [ResetPasswordComponent],
  imports: [CommonModule],
  declarations: [RegisterPetSitterComponent]
})
export class AuthModule {}

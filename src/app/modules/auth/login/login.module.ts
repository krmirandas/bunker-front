import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlMessagesModule } from "@shared/components/control-messages/control-messages.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ControlMessagesModule,
    MatDialogModule,
  ],
})
export class LoginModule {}

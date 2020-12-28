import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPetSitterComponent } from "./login-pet-sitter.component";

const routes: Routes = [
  {
    path: "",
    component: LoginPetSitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPetSitterRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPetSitterComponent } from "./register-pet-sitter.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterPetSitterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPetSitterRoutingModule {}

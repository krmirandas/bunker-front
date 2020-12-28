import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListcuidadoresComponent } from "./listcuidadores.component";

const routes: Routes = [
  {
    path: "",
    component: ListcuidadoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcuidadoresRoutingModule {}

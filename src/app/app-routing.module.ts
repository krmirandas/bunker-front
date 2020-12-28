import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListcuidadoresComponent } from "./modules/listcuidadores/listcuidadores.component";
import { VerPerfilComponent } from "./modules/ver-perfil/ver-perfil.component";
import { LoginPetSitterComponent } from "./modules/auth/login-pet-sitter/login-pet-sitter.component";
import { RegisterPetSitterComponent } from "./modules/auth/register-pet-sitter/register-pet-sitter.component";
import { RegisterComponent } from "./modules/auth/register/register.component";
import { OnboardingComponent } from "./modules/onboarding/onboarding.component";
import { OnboardingCustomerComponent } from "./modules/onboarding/onboarding-customer/onboarding-customer.component";
import { EditProfileComponent } from "./modules/onboarding/onboarding-customer/edit-profile/edit-profile.component";
import { OnboardingPetsitterComponent } from "./modules/onboarding/onboarding-petsitter/onboarding-petsitter.component";
import { EditProfilePetsitterComponent } from "./modules/onboarding/onboarding-petsitter/edit-profile-petsitter/edit-profile-petsitter.component";
import { MyServicesComponent } from "./modules/onboarding/onboarding-petsitter/my-services/my-services.component";
import { MyPetsComponent } from "./modules/onboarding/onboarding-customer/my-pets/my-pets.component";
import { EditPetComponent } from "./modules/onboarding/onboarding-customer/my-pets/edit-pet/edit-pet.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "@modules/home/home.module#HomeModule",
  },
  {
    path: "login",
    loadChildren: "@modules/auth/login/login.module#LoginModule",
  },
  {
    path: "login-pet-sitter",
    component: LoginPetSitterComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "register-pet-sitter",
    component: RegisterPetSitterComponent,
  },
  {
    path: "vercuidadores",
    component: ListcuidadoresComponent,
  },
  {
    path: "ver-perfil",
    component: VerPerfilComponent,
  },
  {
    path: "version",
    loadChildren: "@modules/version/version.module#VersionModule",
  },
  {
    path: "dashboard/home",
    component: OnboardingComponent,
  },
  {
    path: "dashboard/customer",
    component: OnboardingCustomerComponent,
  },
  {
    path: "dashboard/customer/edit",
    component: EditProfileComponent,
  },
  {
    path: "dashboard/customer/my-pets",
    component: MyPetsComponent,
  },
  {
    path: "dashboard/customer/my-pets/edit",
    component: EditPetComponent,
  },
  {
    path: "dashboard/petsitter",
    component: OnboardingPetsitterComponent,
  },
  {
    path: "dashboard/petsitter/edit",
    component: EditProfilePetsitterComponent,
  },
  {
    path: "dashboard/petsitter/my-services",
    component: MyServicesComponent,
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

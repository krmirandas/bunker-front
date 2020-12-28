import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CookieService } from "ngx-cookie-service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ContainerModule } from "@shared/components/container/container.module";
import { AlertModalModule } from "@shared/components/alert-modal/alert-modal.module";
import { LoaderModule } from "@shared/components/loader/loader.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GeneralInterceptor } from "@shared/interceptors/general.interceptor";
import { CurrencyService } from "@shared/services/currency.service";
import { BlockCurrencyService } from "@shared/services/block-currency-select.service";
import { TailormadeCitiesService } from "@shared/services/tailormade-cities.service";
import { ListcuidadoresComponent } from "./modules/listcuidadores/listcuidadores.component";
import { VerPerfilComponent } from "./modules/ver-perfil/ver-perfil.component";
import { LoginPetSitterComponent } from "./modules/auth/login-pet-sitter/login-pet-sitter.component";
import { RegisterComponent } from "./modules/auth/register/register.component";
import { RegisterPetSitterComponent } from "./modules/auth/register-pet-sitter/register-pet-sitter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ControlMessagesModule } from "./shared/components/control-messages/control-messages.module";
import { OnboardingComponent } from "./modules/onboarding/onboarding.component";
import { OnboardingCustomerComponent } from "./modules/onboarding/onboarding-customer/onboarding-customer.component";
import { EditProfileComponent } from "./modules/onboarding/onboarding-customer/edit-profile/edit-profile.component";
import { OnboardingPetsitterComponent } from "./modules/onboarding/onboarding-petsitter/onboarding-petsitter.component";
import { EditProfilePetsitterComponent } from "./modules/onboarding/onboarding-petsitter/edit-profile-petsitter/edit-profile-petsitter.component";
import { MyPetsComponent } from "./modules/onboarding/onboarding-customer/my-pets/my-pets.component";
import { EditPetComponent } from "./modules/onboarding/onboarding-customer/my-pets/edit-pet/edit-pet.component";
import { MyServicesComponent } from "./modules/onboarding/onboarding-petsitter/my-services/my-services.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPetSitterComponent,
    RegisterPetSitterComponent,
    ListcuidadoresComponent,
    VerPerfilComponent,
    RegisterComponent,
    HeaderComponent,
    OnboardingComponent,
    OnboardingCustomerComponent,
    EditProfileComponent,
    OnboardingPetsitterComponent,
    EditProfilePetsitterComponent,
    MyPetsComponent,
    EditPetComponent,
    MyServicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ContainerModule,
    NgbModule,
    AlertModalModule,
    LoaderModule,
    ControlMessagesModule,
  ],
  providers: [
    CookieService,
    CurrencyService,
    BlockCurrencyService,
    TailormadeCitiesService,
    ListcuidadoresComponent,
    VerPerfilComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}

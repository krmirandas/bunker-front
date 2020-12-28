import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OnboardingRoutingModule } from "./onboarding-routing.module";
import { OnboardingComponent } from "./onboarding.component";
import { OnboardingCustomerComponent } from "./onboarding-customer/onboarding-customer.component";
import { OnboardingPetsitterComponent } from "./onboarding-petsitter/onboarding-petsitter.component";
import { OnboardingAdminComponent } from "./onboarding-admin/onboarding-admin.component";
import { MyPetsComponent } from "./onboarding-customer/my-pets/my-pets.component";
import { EditPetComponent } from "./onboarding-customer/my-pets/edit-pet/edit-pet.component";
import { EditProfileComponent } from './onboarding-customer/edit-profile/edit-profile.component';
import { EditProfilePetsitterComponent } from './onboarding-petsitter/edit-profile-petsitter/edit-profile-petsitter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MyServicesModule } from './onboarding-petsitter/my-services/services.module';

@NgModule({
  declarations: [
    OnboardingComponent,
    OnboardingCustomerComponent,
    OnboardingPetsitterComponent,
    OnboardingAdminComponent,
    MyPetsComponent,
    EditPetComponent,
    EditProfileComponent,
    EditProfilePetsitterComponent,
    
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyServicesModule
  ],
  exports: [],
})
export class OnboardingModule {}

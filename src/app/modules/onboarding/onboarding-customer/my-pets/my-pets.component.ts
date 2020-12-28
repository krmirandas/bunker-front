import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { MyPetsService } from "./my-pets.service";

import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";

@Component({
  selector: "app-my-pets",
  templateUrl: "./my-pets.component.html",
  styleUrls: ["./my-pets.component.scss"],
})
export class MyPetsComponent implements OnInit {
  public pets: any = [];
  formPet = this.formBuilder.group({
    name: ["", Validators.required],
    age: ["", Validators.required],
    gender: ["", Validators.required],
    size: ["", Validators.required],
    weight: ["", Validators.required],
    personality: ["", Validators.required],
  });
  public isLoading = false;
  public petsForm: FormArray;

  constructor(public pet: MyPetsService, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formPet.get("name");
    this.formPet.get("age");
    this.formPet.get("gender");
    this.formPet.get("size");
    this.formPet.get("weight");
    this.formPet.get("personality");
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
    this.getPets();
  }

  private getPets() {
    this.pet.getPets().then(
      (data) => {
        console.log(data);
        this.pets = data.pets;
        this.pets = this.mapEditionActive(this.pets);
        this.generateUpdateServiceForms(this.pets);
      },
      (err) => console.error(err)
    );
  }

  public deletePet(index) {
    this.pet.deletePet(index).then(
      (data) => {
        console.log(this.formPet.valid);
        this.getPets();
      },
      (err) => {}
    );
  }

  public save() {
    if (this.formPet.valid) {
      this.isLoading = true;
      let dataSend = {
        name: this.formPet.controls.name.value,
        age: this.formPet.controls.age.value,
        gender: this.formPet.controls.gender.value,
        size: this.formPet.controls.size.value,
        weight: this.formPet.controls.weight.value,
        personality: this.formPet.controls.personality.value,
      };
      console.log(dataSend);
      return this.pet.createPet(dataSend).then(
        (data) => {
          this.getPets();
          this.formPet.reset();
        },
        (err) => {}
      );
    }
  }

  private mapEditionActive(array) {
    return array.map((element) => {
      return {
        edition_active: false,
        ...element,
      };
    });
  }

  public generateUpdateServiceForms(pets) {
    this.petsForm = new FormArray([]);
    pets.forEach((pet) => {
      const group = this.formBuilder.group({
        name: [pet.name, Validators.required],
        size: [pet.size, Validators.required],
        weight: [pet.weight, Validators.required],
        gender: [pet.gender, Validators.required],
        age: [pet.age, Validators.required],
        personality: [pet.personality, Validators.required],
        // , [Validators.required, ValidatorsFormService.priceValidator]
        // type: [service.type]
      });
      this.petsForm.push(group);
    });
  }

  public updatePet(i) {
    if (this.petsForm.controls[i].valid) {
      const serviceUpdated = this.petsForm.controls[i];
      this.pets[i] = {
        ...this.pets[i],
        // type: serviceUpdated.get('type').value,
        name: serviceUpdated.get("name").value,
        age: serviceUpdated.get("age").value,
        weight: serviceUpdated.get("weight").value,
        size: serviceUpdated.get("size").value,
        gender: serviceUpdated.get("gender").value,
        personality: serviceUpdated.get("personality").value,
      };
      this.isLoading = true;
      let dataSend = this.pets[i];
      return this.pet.patchPet(dataSend, dataSend.id).then(
        (data) => {
          this.pets[i].edition_active = false;
        },
        (err) => {
          this.pets[i].edition_active = false;
        }
      );
    }
  }
  throwError(error) {
    this.isLoading = false;
  }
}

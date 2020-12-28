import { Component, OnInit } from "@angular/core";
import { MyServicesService } from "./my-services.service";
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from "@angular/forms";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";

@Component({
  selector: "app-my-services",
  templateUrl: "./my-services.component.html",
  styleUrls: ["./my-services.component.scss"],
})
export class MyServicesComponent implements OnInit {
  public services: any = [];
  public packages: any = [];
  public servicesForPackage = [];
  public isLoading = false;
  formService = this.formBuilder.group({
    price: ["", [Validators.required, ValidatorsFormService.priceValidator]],
    type: ["", [Validators.required, ValidatorsFormService]],
  });
  formPackage = this.formBuilder.group({
    price: ["", [Validators.required, ValidatorsFormService.priceValidator]],
    type: ["", [Validators.required]],
  });
  public servicesForms: FormArray;
  public packagesForms: FormArray;
  constructor(
    public service: MyServicesService,
    public pack: MyServicesService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formService.get("type");
    this.formService.get("price");
    this.getServices();
    this.getPackages();
    let nav = document.getElementById("nav");
    nav.classList.remove("navbar-index");
  }


  public generateUpdateServiceForms(services) {
    this.servicesForms = new FormArray([])
    services.forEach((service) => {
      const group = this.formBuilder.group({
          price: [service.price, Validators.required],
          // , [Validators.required, ValidatorsFormService.priceValidator]
          // type: [service.type]
      });
      this.servicesForms.push(group)
    })
  }

  private getServices() {
    this.service.getServices()
    .then(
      (data) => {
        this.services = data.services;
        this.services = this.mapEditionActive(this.services)
        this.generateUpdateServiceForms(this.services)
      },
      (err) => console.error(err)
    );
  }

  private mapEditionActive(array) {
    return array.map((element) => {
      return {
        edition_active: false,
        ...element,
        options: this.transformTextToArray(element.type)
      }
    })
  }

  public updateService(i) {
    if(this.servicesForms.controls[i].valid){
      const serviceUpdated = this.servicesForms.controls[i];
      this.services[i] = {
        ...this.services[i],
        // type: serviceUpdated.get('type').value,
        price: serviceUpdated.get('price').value
      }
      this.isLoading = true;
      let dataSend = this.services[i];
      return this.service.patchServices(dataSend, dataSend.id).then(
        (data) => {
          this.services[i].edition_active = false
        },
        (err) => {
          this.services[i].edition_active = false
        }
      );
    }
  }

  public deleteService(index) {
    this.service.deleteService(index).then(
      (data) => {
        console.log(this.formService.valid);
        this.getServices();
      },
      (err) => {}
    );
  }

  public saveService(formService) {
    if (this.formService.valid) {
      this.isLoading = true;
      let dataSend = {
        type: this.formService.controls.type.value,
        price: this.formService.controls.price.value,
      };
      return this.service.createService(dataSend).then(
        (data) => {
          this.getServices();
          this.formService.reset();
        },
        (err) => {}
      );
    }
  }

  /* PACKAGES */
  private getPackages() {
    this.pack.getPackages().then(
      (data) => {
        this.packages = data.packages;
        this.packages = this.mapEditionActive(this.packages)
        this.generateUpdatePackageForms(this.packages)
        console.log(this.packages)
      },
      (err) => console.error(err)
    );
  }

  private transformTextToArray(text) {
    if(!text) return []
    return text.split(', ');
  }

  public generateUpdatePackageForms(packages) {
    this.packagesForms = new FormArray([])
    packages.forEach((pkg) => {
      const group = this.formBuilder.group({
          price: [pkg.price, Validators.required],
          // , [Validators.required, ValidatorsFormService.priceValidator]
          type: [pkg.type, Validators.required]
      });
      this.packagesForms.push(group)
    })
  }

  public deletePackage(index) {
    this.pack.deletePackage(index).then(
      (data) => {
        console.log(this.formPackage.valid);
        this.getPackages();
      },
      (err) => {}
    );
  }

  isOptionIncluded(options: any[], option){
    return options.includes(option)
  }

  addOrRemoveService(serviceName: string, form: FormGroup, options = []){
    let packagesList = []
    if(options.length != 0){
      packagesList = options
    } else {
      packagesList = this.servicesForPackage;
    }
    const index = packagesList.indexOf(serviceName)
    if(index === -1){
      packagesList.push(serviceName)
    } else {
      packagesList.splice(index, 1);
    }
    form.get('type').setValue(packagesList.join(', '))
  }

  public savePackage() {
    if (this.formPackage.valid) {
      this.isLoading = true;
      let dataSend = {
        type: this.formPackage.controls.type.value,
        price: this.formPackage.controls.price.value,
      };
      return this.pack.createPackage(dataSend).then(
        (data) => {
          this.getPackages();
          this.servicesForPackage = []
          this.formPackage.reset();
        },
        (err) => {
          this.servicesForPackage = []
          this.formPackage.reset();
        }
      );
    }
  }

  public updatePackage(i) {
    if(this.packagesForms.controls[i].valid){
      const packageUpdated = this.packagesForms.controls[i];
      console.log(packageUpdated)
      console.log(this.packages[i])
      this.packages[i] = {
        ...this.packages[i],
        // type: packageUpdated.get('type').value,
        price: packageUpdated.get('price').value,
        type: this.packages[i].options.join(', ')
      }
      this.isLoading = true;
      let dataSend = this.packages[i];
      return this.pack.patchPackages(dataSend, dataSend.id).then(
        (data) => {
          this.packages[i].edition_active = false
        },
        (err) => {
          this.packages[i].edition_active = false
        }
      );
    }
  }

  throwError(error) {
    this.isLoading = false;
  }
}

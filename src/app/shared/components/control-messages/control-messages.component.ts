import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidatorsFormService } from "@shared/services/validators-form/validators-form.service";

@Component({
  selector: "control-messages",
  templateUrl: "./control-messages.component.html",
  styleUrls: ["./control-messages.component.scss"]
})
export class ControlMessagesComponent {
  @Input() control: FormControl;

  lang = "esp";
  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidatorsFormService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.lang
        );
      }
    }
    return null;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsFormService {

  static esp = {
    required: 'Este campo es obligatorio',
    invalidEmailAddress: 'Introduzca un correo electrónico válido',
    invalidNumberPhone: 'Número teléfonico inválido',
    invalidPrice: 'Tu precio debe ser mayor a 200'
  }

  static eng = {
    required: 'This field is required',
    invalidEmailAddress: 'Enter a valid email',
    invalidNumberPhone: 'Invalid phone number',
    invalidPrice: 'Your price must be greater than 200'
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any, language: string = 'esp') {
    let config = {
      'required': this.msg(language, 'required'),
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': this.msg(language, 'invalidEmailAddress'),
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Al menos ${validatorValue.requiredLength} caracteres`,
      'invalidNumberPhone': this.msg(language, 'invalidNumberPhone'),
      'invalidPrice': this.msg(language, 'invalidPrice'),
    };

    return config[validatorName];
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { 'invalidCreditCard': true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static priceValidator(control) {
    if (Number(control.value) >= 200) {
      return null;
    }
    else {
      return { 'invalidPrice': true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static phoneNumberValidator(control) {
    if (control.value.match(/[1-9][0-9]{9,14}/)) {
      return null;
    } else {
      return { 'invalidNumberPhone': true };
    }
  }


  static msg(lang, property: string) {
    let lblMsg = {};
    switch (lang) {
      case 'esp':
        lblMsg = this.esp;
        break;
      case 'eng':
        lblMsg = this.eng;
        break;
      default:
        lblMsg = this.esp;
        break;
    }
    return lblMsg[property];
  }
}

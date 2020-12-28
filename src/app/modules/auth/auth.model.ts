export class Auth {
  public email?: string = "";
  public password?: string = "";
  public password_confirmation?: string = "";
  public device_uuid?: string = "";


  constructor(email?: string, password?: string, password_confirmation?: string, device_uuid?: string) {
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
    this.device_uuid = device_uuid;
  }
}

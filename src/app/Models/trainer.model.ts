export class Trainer {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  mail: string;
  tel: string;
  address: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    isActive: boolean,
    mail: string,
    tel: string,
    address: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
    this.mail = mail;
    this.tel = tel;
    this.address = address;
  }
}
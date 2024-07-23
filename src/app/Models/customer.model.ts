export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    email:string
    customerTypeId?: number;
    HMOId?: number;
    paymentOptionsId?: number;
    subscriptionTypeId?: number;
    isActive?: boolean;
    tel?: string;
    address?: string;
  
    constructor(
      id:number,
      firstName: string,
      lastName: string,
      email:string,
      customerTypeId: number,
      HMOId: number,
      paymentOptionsId: number,
      subscriptionTypeId: number,
      isActive: boolean,
      tel: string,
      address: string
    ) {
        this.id=id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email=email
      this.customerTypeId = customerTypeId;
      this.HMOId = HMOId;
      this.paymentOptionsId = paymentOptionsId;
      this.subscriptionTypeId = subscriptionTypeId;
      this.isActive = isActive;
      this.tel = tel;
      this.address = address;
    }
  }
  
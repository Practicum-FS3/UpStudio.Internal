import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/Models/customer.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { CustomerService } from 'src/app/Services/customers.service';
import { CustomerTypeService } from 'src/app/Services/customer-type.service';
import { PaymentOptionService } from 'src/app/Services/payment-option.service';
import { SubscriptionTypeService } from 'src/app/Services/subscription-type.service';
import { HMOService } from 'src/app/Services/hmo.service';
import { Router } from '@angular/router';
import { CustomerType } from 'src/app/Models/customerType.model';
import { PaymentOption } from 'src/app/Models/paymentOption.model';
import { SubscriptionType } from 'src/app/Models/subscriptionType.model';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { HMO } from 'src/app/Models/HMO.model';
@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [FormsModule,
    TabViewModule,
    CommonModule,
    ReactiveFormsModule,
    SelectButtonModule],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent {
  paymentOptions!: PaymentOption[]
  subscriptionType: SubscriptionType[] = []
  customersType: CustomerType[] = [];
  allHMO: HMO[] = [];
  myForm: FormGroup
  toedit: boolean = true;
  currentCustomer?: Customer
  stateOptions: any[] = [{ label: 'לא פעיל', value: false }, { label: 'פעיל', value: true }];
  @Input() custId?: number;

  ngOnInit() {
    if (this.custId) {
      this.getCust(this.custId);
      this.toedit = false;
    } else {
      this.toedit = true;
    }
    this.paymentOptionService.getAllPaymentOption().subscribe(data => {
      this.paymentOptions = data
    })
    this.CustomerType.getAllCustomerType().subscribe(data => {
      this.customersType = data
    })
    this.subscriptionTypeService.getAllSubscriptionType().subscribe(data => {
      this.subscriptionType = data
    })
    this.HMOService.getAllHMO().subscribe(data => {
      this.allHMO = data
    })
  }
  constructor(private customerService: CustomerService,
    private paymentOptionService: PaymentOptionService,
    private CustomerType: CustomerTypeService,
    private subscriptionTypeService: SubscriptionTypeService,
    private HMOService: HMOService,
    private router: Router) {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת]*$')]),
      customerTypeId: new FormControl('', Validators.required),
      hmoId: new FormControl('', Validators.required),
      paymentOptionId: new FormControl('', Validators.required),
      subscriptionTypeId: new FormControl('', Validators.required),
      isActive: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  getCust(custId: number) {
    this.customerService.getCustomerById(custId).subscribe(data => {
      console.log({ data });
      this.currentCustomer = data
    })
  }
  edit() {
    this.toedit = true;
    let val = this.currentCustomer?.isActive === true ? true : false
    this.myForm.get('isActive')?.setValue(val);
  }
  saveChanges() {
    console.log(this.myForm.valid);
    
    if (this.myForm.valid) {
      const { controls } = this.myForm
      let cust: Customer = new Customer(
        0,
        controls['firstName'].value,
        controls['lastName'].value,
        controls['email'].value,
        controls['customerTypeId'].value,
        controls['hmoId'].value,
        controls['paymentOptionId'].value,
        controls['subscriptionTypeId'].value,
        controls['isActive'].value,
        controls['tel'].value,
        controls['address'].value)
      if (this.custId != undefined) {
        if (this.currentCustomer?.id) { cust.id = this.currentCustomer?.id }
        this.customerService.updateCustomer(cust).subscribe(data => {
          if (this.currentCustomer?.id) {
            this.getCust(this.currentCustomer.id)
            this.toedit = false;
          }
        })
      }
      else {
        console.log("add", cust);
        this.customerService.addCustomer(cust).subscribe(data => {
          console.log({ data });
          location.reload();
        })
      }
    }
  }
}


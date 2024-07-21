import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/Modules/Customer ';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CustomerService } from 'src/app/Services/customer.service';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [FormsModule,
    AutoCompleteModule,
    TabViewModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    RadioButtonModule],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent {
  value: string = "ghjk"
  myForm: FormGroup
  toedit: boolean = false;
  curtentCustomer?: Customer
  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' }, { label: 'Return', value: 'return' }];


  @Input() set custId(custId: number) {

  }

  constructor(private customerService: CustomerService) {
    console.log("ghjkl");

    if (this.custId) {//במידה וקיבלתי id
      // this.getCust(this.custId);עקרונית זה אמור להיות כאן ולא ב else לזכור לשנות!
      this.toedit = false;
    } else {
      this.toedit = true;
      this.getCust(this.custId);
    }

    this.myForm = new FormGroup({

      firstName: new FormControl(''),
      lastName: new FormControl(''),
      customerTypeId: new FormControl(''),
      hmoId: new FormControl(''),
      paymentOptionId: new FormControl(''),
      subscriptionTypeId: new FormControl(''),
      isActive: new FormControl(''),
      tel: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      selectedCategory: new FormControl('')
    })
  }
  getCust(custId: number) {

    this.customerService.getCustomerBId(1).subscribe(data => {
      console.log({ data });
      this.curtentCustomer = data
    })
  }
  edit() {

    this.toedit = false;
  }

  saveChanges() {
    const { controls } = this.myForm
    let cust: Customer = new Customer(
      controls['firstName'].value,
      controls['lastName'].value,
      controls['customerTypeId'].value,
      controls['hmoId'].value,
      controls['paymentOptionId'].value,
      controls['subscriptionTypeId'].value,
      controls['isActive'].value,
      controls['tel'].value,
      controls['address'].value,
      controls['email'].value)
    console.log(cust);
    if (this.custId === undefined) {
      console.log("update");
      cust.id=this.curtentCustomer?.id
      this.customerService.apdateCustomer(cust).subscribe(data => {
        console.log({ data });
        this.myForm.reset()
      })
    }
    else {

      this.customerService.addCustomer(cust).subscribe(data => {
        console.log({ data });
        this.myForm.reset()
      })
     
    }
  }
  categories: any[] = [
    { name: 'פעיל', key: 'A' },
    { name: 'לא פעיל', key: 'M' }

  ];

}

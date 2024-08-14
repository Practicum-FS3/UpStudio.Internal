// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { TabViewModule } from 'primeng/tabview';
// import { SelectButtonModule } from 'primeng/selectbutton';
// import { ActivatedRoute, Router } from '@angular/router';
// import { forkJoin } from 'rxjs';

// import { Customer } from 'src/app/Models/customer.model';
// import { CustomerService } from 'src/app/Services/customers.service';
// import { CustomerTypeService } from 'src/app/Services/customerType.service';
// import { PaymentOptionService } from 'src/app/Services/paymentOption.service';
// import { SubscriptionTypeService } from 'src/app/Services/subscriptionType.service';
// import { HMOService } from 'src/app/Services/HMO.service';
// import { TrainingCustomerService } from 'src/app/Services/trainingCustomer.service';
// import { TrainingService } from 'src/app/Services/trainig.servisec';
// import { TrainerService } from 'src/app/Services/trainer.service';
// import { AvailableTrainingService } from 'src/app/Services/availableTraining.service';
// import { Training } from 'src/app/Models/Training.model';
// import { Trainer } from 'src/app/Models/trainer.model';
// import { AvailableTraining } from 'src/app/Models/availableTraining.model';
// import { PaymentOption } from 'src/app/Models/paymentOption.model';
// import { SubscriptionType } from 'src/app/Models/subscriptionType.model';
// import { CustomerType } from 'src/app/Models/customerType.model';
// import { HMO } from 'src/app/Models/HMO.model';

// @Component({
//   selector: 'app-customer-card',
//   standalone: true,
//   imports: [FormsModule, TabViewModule, CommonModule, ReactiveFormsModule, SelectButtonModule],
//   templateUrl: './customer-card.component.html',
//   styleUrls: ['./customer-card.component.scss']
// })
// export class CustomerCardComponent {
//   paymentOptions!: PaymentOption[];
//   subscriptionType: SubscriptionType[] = [];
//   customersType: CustomerType[] = [];
//   allHMO: HMO[] = [];
//   trainings: (Training & { trainerName?: string, trainingDate?: Date })[] = [];
//   myForm: FormGroup;
//   toedit: boolean = true;
//   currentCustomer?: Customer;
//   stateOptions: any[] = [{ label: 'לא פעיל', value: false }, { label: 'פעיל', value: true }];
//   @Input() custId?: number;

//   constructor(
//     private customerService: CustomerService,
//     private paymentOptionService: PaymentOptionService,
//     private customerTypeService: CustomerTypeService,
//     private subscriptionTypeService: SubscriptionTypeService,
//     private trainingCustomerService: TrainingCustomerService,
//     private trainingService: TrainingService,
//     private trainerService: TrainerService,
//     private availableTrainingService: AvailableTrainingService,
//     private HMOService: HMOService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.myForm = new FormGroup({
//       firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת]*$')]),
//       lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת]*$')]),
//       customerTypeId: new FormControl('', Validators.required),
//       hmoId: new FormControl('', Validators.required),
//       paymentOptionId: new FormControl('', Validators.required),
//       subscriptionTypeId: new FormControl('', Validators.required),
//       isActive: new FormControl('', Validators.required),
//       tel: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
//       address: new FormControl('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.email])
//     });
//   }

//   ngOnInit() {
//     console.log('ngOnInit called');

//     if (this.custId) {
//       this.getCust(this.custId);
//       this.toedit = false;
//     } else {
//       this.toedit = true;
//     }
//     this.paymentOptionService.getAllPaymentOption().subscribe(data => {
//       this.paymentOptions = data;
//     });
//     this.customerTypeService.getAllCustomerType().subscribe(data => {
//       this.customersType = data;
//     });
//     this.subscriptionTypeService.getAllSubscriptionType().subscribe(data => {
//       this.subscriptionType = data;
//     });
//     this.HMOService.getAllHMO().subscribe(data => {
//       this.allHMO = data;
//     });
//   }

//   loadTrainings(customerId: number) {
//     console.log(customerId);
//     this.trainingCustomerService.getTrainingByCustomerId(customerId).subscribe(trainingCustomers => {
//       const trainingIds = trainingCustomers.map(tc => tc.trainingID);
//       this.fetchTrainings(trainingIds);
//     }, error => {
//       console.error("Error fetching training customers:", error);
//     });
//   }

//   fetchTrainings(trainingIds: number[]) {
//     const trainingObservables = trainingIds.map(id => this.trainingService.getTrainingById(id));

//     forkJoin(trainingObservables).subscribe(trainings => {
//       this.trainings = trainings;

//       trainings.forEach((training, index) => {
//         this.trainerService.getTrainerById(training.trainerID).subscribe(trainer => {
//           this.trainings[index].trainerName = `${trainer.firstName} ${trainer.lastName}`;
//         });

//         this.availableTrainingService.getAvailableTrainingByTrainingId(training.id).subscribe(availableTraining => {
//           this.trainings[index].trainingDate = availableTraining.date;
//         });
//       });
//     }, error => {
//       console.error("Error fetching trainings:", error);
//     });
//   }

//   getCust(custId: number) {
//     this.customerService.getCustomerById(custId).subscribe(data => {
//       this.currentCustomer = data;
//       this.loadTrainings(custId); // הורד את היסטורית האימונים
//     });
//   }

//   edit() {
//     this.toedit = true;
//     let val = this.currentCustomer?.isActive === true ? true : false;
//     this.myForm.get('isActive')?.setValue(val);
//   }

//   saveChanges() {
//     console.log(this.myForm.valid);
//     if (this.myForm.valid) {
//       const { controls } = this.myForm;
//       let cust: Customer = new Customer(
//         0,
//         controls['firstName'].value,
//         controls['lastName'].value,
//         controls['email'].value,
//         controls['customerTypeId'].value,
//         controls['hmoId'].value,
//         controls['paymentOptionId'].value,
//         controls['subscriptionTypeId'].value,
//         controls['isActive'].value,
//         controls['tel'].value,
//         controls['address'].value
//       );
//       if (this.custId != undefined) {
//         if (this.currentCustomer?.id) { cust.id = this.currentCustomer?.id; }
//         this.customerService.updateCustomer(cust).subscribe(data => {
//           if (this.currentCustomer?.id) {
//             this.getCust(this.currentCustomer.id);
//             this.toedit = false;
//           }
//         });
//       } else {
//         console.log("add", cust);
//         this.customerService.addCustomer(cust).subscribe(data => {
//           console.log({ data });
//           location.reload();
//         });
//       }
//     }
//   }
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Customer } from 'src/app/Models/customer.model';
import { CustomerService } from 'src/app/Services/customers.service';
import { CustomerTypeService } from 'src/app/Services/customerType.service';
import { PaymentOptionService } from 'src/app/Services/paymentOption.service';
import { SubscriptionTypeService } from 'src/app/Services/subscriptionType.service';
import { HMOService } from 'src/app/Services/HMO.service';
import { TrainingCustomerTypeService } from 'src/app/Services/trainingCustomerType.service';
import { TrainingService } from 'src/app/Services/trainig.service';
import { TrainerService } from 'src/app/Services/trainer.service';
import { AvailableTrainingService } from 'src/app/Services/availableTraining.service';
import { TrainingDetails } from 'src/app/Models/training-details.model';
import { Trainer } from 'src/app/Models/trainer.model';
import { AvailableTraining } from 'src/app/Models/availableTraining.model';
import { PaymentOption } from 'src/app/Models/paymentOption.model';
import { SubscriptionType } from 'src/app/Models/subscriptionType.model';
import { CustomerType } from 'src/app/Models/customerType.model';
import { HMO } from 'src/app/Models/HMO.model';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [FormsModule, TabViewModule, CommonModule, ReactiveFormsModule, SelectButtonModule],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent {
  paymentOptions!: PaymentOption[];
  subscriptionType: SubscriptionType[] = [];
  customersType: CustomerType[] = [];
  allHMO: HMO[] = [];
  trainings: TrainingDetails[] = [];
  myForm: FormGroup;
  toedit: boolean = true;
  currentCustomer?: Customer;
  currentTraining: TrainingDetails | null = null;
  currentTrainingIndex: number = 0;
  stateOptions: any[] = [{ label: 'לא פעיל', value: false }, { label: 'פעיל', value: true }];
  @Input() custId?: number;

  constructor(
    private customerService: CustomerService,
    private paymentOptionService: PaymentOptionService,
    private customerTypeService: CustomerTypeService,
    private subscriptionTypeService: SubscriptionTypeService,
    private trainingCustomerService: TrainingCustomerTypeService,
    private trainingService: TrainingService,
    private trainerService: TrainerService,
    private availableTrainingService: AvailableTrainingService,
    private HMOService: HMOService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    });
  }

  ngOnInit() {
    console.log('ngOnInit called');

    if (this.custId) {
      this.getCust(this.custId);
      this.toedit = false;
    } else {
      this.toedit = true;
    }
    this.paymentOptionService.getAllPaymentOption().subscribe(data => {
      this.paymentOptions = data;
    });
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customersType = data;
    });
    this.subscriptionTypeService.getAllSubscriptionType().subscribe(data => {
      this.subscriptionType = data;
    });
    this.HMOService.getAllHMO().subscribe(data => {
      this.allHMO = data;
    });
  }

  loadTrainings(customerId: number) {
    console.log(customerId);
    // this.trainingCustomerService.getTrainingByCustomerId(customerId).subscribe(trainingCustomers => {
    //   const trainingIds = trainingCustomers.map(tc => tc.trainingID);
    //   this.fetchTrainings(trainingIds);
    // }, error => {
    //   console.error("Error fetching training customers:", error);
    // });
  }

  fetchTrainings(trainingIds: number[]) {
    const trainingObservables = trainingIds.map(id => this.trainingService.getTrainingById(id));

    forkJoin(trainingObservables).subscribe(trainings => {
        console.log('Fetched trainings:', trainings);
        this.trainings = trainings as TrainingDetails[];
        this.trainings.sort((a, b) => (b.trainingDate ?? new Date()).getTime() - (a.trainingDate ?? new Date()).getTime());

        this.currentTrainingIndex = 0;
        this.updateTrainerAndDate()
        this.updateCurrentTraining();
    }, error => {
        console.error("Error fetching trainings:", error);
    });
  }

  updateCurrentTraining() {
    if (this.trainings.length > 0) {
        this.currentTraining = this.trainings[this.currentTrainingIndex];
    } else {
        this.currentTraining = null;
    }
  }

  updateTrainerAndDate() {
    this.trainings.forEach((training, index) => {
      // this.trainerService.getTrainerById(training.trainerID).subscribe(trainer => {
      //   this.trainings[index].trainerName = `${trainer.firstName} ${trainer.lastName}`;
      // });

      // this.availableTrainingService.getAvailableTrainingByTrainingId(training.id).subscribe(availableTraining => {
      //   this.trainings[index].trainingDate = availableTraining.date;
      // });
    });
  }

  getCust(custId: number) {
    this.customerService.getCustomerById(custId).subscribe(data => {
      this.currentCustomer = data;
      this.loadTrainings(custId);
    });
  }

  edit() {
    this.toedit = true;
    let val = this.currentCustomer?.isActive === true ? true : false;
    this.myForm.get('isActive')?.setValue(val);
  }

  saveChanges() {
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      const { controls } = this.myForm;
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
        controls['address'].value
      );
      if (this.custId != undefined) {
        if (this.currentCustomer?.id) { cust.id = this.currentCustomer?.id; }
        this.customerService.updateCustomer(cust).subscribe(data => {
          if (this.currentCustomer?.id) {
            this.getCust(this.currentCustomer.id);
            this.toedit = false;
          }
        });
      } else {
        console.log("add", cust);
        this.customerService.addCustomer(cust).subscribe(data => {
          console.log({ data });
          location.reload();
        });
      }
    }
  }

  prevTraining() {
    if (this.currentTrainingIndex > 0) {
      this.currentTrainingIndex--;
      this.updateCurrentTraining();
    }
  }

  nextTraining() {
    if (this.currentTrainingIndex < this.trainings.length - 1) {
      this.currentTrainingIndex++;
      this.updateCurrentTraining();
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionType } from 'src/app/Models/SubscriptionType';
import { SubscriptionService } from 'src/app/Services/SubscriptionService';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  @Input()
  actionType: string='';
  subscriptionForm!: FormGroup;
  newSubscription!: SubscriptionType;

  
  ngOnInit(): void {
    this.subscriptionForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      numberOfTrainingPerWeek:new FormControl('',[Validators.required]),
      totalTraining:new FormControl('',[Validators.required]),
      priceForTraining:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
  })
 
}
constructor(private _subscriptionService: SubscriptionService) { }

saveDetails(form: FormGroup){
  console.log('form',this.subscriptionForm.value);
  const formValue: Partial<SubscriptionType> = this.subscriptionForm.value;
  this.newSubscription={...formValue,isActive:true} as SubscriptionType;
  console.log('newSubscription from componrnrt',this.newSubscription)
  switch(this.actionType){
    case 'add':  this._subscriptionService.AddNewSubscription(this.newSubscription).subscribe(res =>{console.log(res)});
    // case 'delete': this._subscriptionService.DeleteSubscription()
  }
}
}


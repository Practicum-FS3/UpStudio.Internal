import { Component } from '@angular/core';
import { SubscriptionType } from 'src/app/Models/SubscriptionType';
import { SubscriptionService } from 'src/app/Services/SubscriptionService';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.component.html',
  styleUrls: ['./subscription-options.component.scss'],
})

export class SubscriptionOptionsComponent {
  cols: string[] =[]
  lstSubs: SubscriptionType []=[]
  options: any[]=[];
  action:string = '';

constructor(private _subscriptionService: SubscriptionService) { }
ngOnInit() {
  this.loadSubscriptions();
  this.cols = this._subscriptionService.cols;
  this.options = this.allOptions();
}

allOptions():object[]{
  return [
    {
      label: 'Add',
      icon: 'pi pi-plus',
      command: () => {
        this.action='add';
      }
    },
    {
      label: 'Update',
      icon: 'pi pi-pencil',
      command: () => {
        // action to update
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        // action to delete
      }
    }
  ];
}

loadSubscriptions() {
  this._subscriptionService.GetAllSubscriptions().subscribe(
    (data: SubscriptionType[]) => {
      this.lstSubs = data;
    },
    (error) => {
      console.error('Error fetching subscriptions', error);
    }
  );
}
}

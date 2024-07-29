import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Modules/Customer ';
import { CustomerType } from '../Models/customerType.model';
import { SubscriptionType } from '../Models/subscriptionType.model';
import { PaymentOptions } from '../Modules/PaymentOption';
import { HMO } from '../Models/HMO.model';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {
private baseUrl = "https://localhost:7101/api"
  constructor(private http:HttpClient) { }
  getAllSubscriptionType():Observable<Array<SubscriptionType>>{
    return this.http.get<Array<SubscriptionType>>(`${this.baseUrl}/SubscriptionType`)
  }
}

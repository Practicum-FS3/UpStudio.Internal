import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.model';
import { CustomerType } from '../Models/customerType.model';
import { SubscriptionType } from '../Models/subscriptionType.model';
import { PaymentOption } from '../Models/paymentOption.model';
import { HMO } from '../Models/HMO.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
private baseUrl = "https://localhost:7101/api"
  constructor(private http:HttpClient) { }
  getAllCustomerType():Observable<Array<CustomerType>>{
    return this.http.get<Array<CustomerType>>(`${this.baseUrl}/CustomerType`)
  }
}
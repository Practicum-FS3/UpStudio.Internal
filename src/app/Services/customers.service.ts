import { Injectable } from "@angular/core";
import { Customer } from "../Models/customer.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

const CUSTOMERS=[new Customer(1,"elish", "star","elishstar1@gmail.com", 1, 1, 1, 1, true, "0504153454", "string"),
  new Customer(2,"michal","mazoz","miachal7969@gmail.com",1,1,1,1,true,"0504153454","string")]
@Injectable()
export class CustomerService {

    apiUrl: string = "/api/Customer";
    constructor(private _http:HttpClient){

    }

    getCustomertFromServer():Observable<Customer[]>{
        return this._http.get<Customer[]>(this.apiUrl)
    }


    getCustomerByName(name: string): Observable<Customer[]> {
      return this.getCustomertFromServer().pipe(
        map(customers => {
          const lowerCaseName = name.toLowerCase();
          return customers.filter(customer => {
            const fullName = `${customer.firstName.toLowerCase()} ${customer.lastName.toLowerCase()}`;
            return fullName.includes(lowerCaseName);
          });
        })
      );
    }

    getCustomerById(id: number): Observable<Customer> {
        return this._http.get<Customer>(`${this.apiUrl}/byId/${id}`);
    }

    getCustomerByEmail(email: string): Observable<Customer[]> {
      return this.getCustomertFromServer().pipe(
        map(customers => customers.filter(customer => 
          customer.email.toLowerCase().includes(email.toLowerCase())
        ))
      );
    }
    addCustomer(customer:Customer):Observable<Customer>{
      console.log("addCustomer from servic");
      
      return this._http.post<Customer>(`${this.apiUrl}/addCustomer`,customer,
        {headers: { 'content-type': "application/json" }}
      )
    }
    updateCustomer(customer:Customer):Observable<Customer>{
      return this._http.put<Customer>(`${this.apiUrl}`,customer,
        {headers: { 'content-type': "application/json" }}
      )
    }
}
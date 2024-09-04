import { Injectable } from "@angular/core";
import { Customer } from "../Models/customer.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class CustomerService {
    apiUrl: string = "/api/Customer";
    constructor(private _http: HttpClient) {}

    getCustomertFromServer(): Observable<Customer[]> {
      console.log(this.apiUrl)
        return this._http.get<Customer[]>(this.apiUrl);
    }

    getCustomerById(id: number): Observable<Customer> {
        return this._http.get<Customer>(`${this.apiUrl}/byId/${id}`);
    }
    
    filterCustomers(firstName?: string, lastName?: string, email?: string): Observable<Customer[]> {
        let params = new HttpParams();
        if (firstName) params = params.set('firstName', firstName.trim());
        if (lastName) params = params.set('lastName', lastName.trim());
        if (email) params = params.set('email', email.trim());
        return this._http.get<Customer[]>(`${this.apiUrl}/filter`, { params });
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
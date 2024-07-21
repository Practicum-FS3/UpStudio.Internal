import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Modules/Customer ';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customers: Array<Customer> = [
    new Customer("chany", "zait", 1, 2, 1, 1, true, "03-9092861", "aaa","chany@gmail.com"),
    new Customer("Ayala", "Zelniker", 1, 2, 1, 1, false, "03-9093303", "bbb","Ayala@gmail.com"),
    new Customer("Shoshy", "zait", 1, 2, 1, 1, true, "03-9092861", "ccc","shoshy@gmail.com")
  ]
  private baseUrl = "https://localhost:7101/api"
  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<Customer>> {
    const data = this.http.get<Array<Customer>>(`${this.baseUrl}/Customer`)
    return data

  }
  //כנ"ל
  getCustomerBId(custId:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/Customer/byId/${custId}`)

  }
  addCustomer(customer:Customer):Observable<Customer>{
    console.log("addCustomer from servic");
    
    return this.http.post<Customer>(`${this.baseUrl}/Customer/addCustomer`,customer,
      {headers: { 'content-type': "application/json" }}
    )
  }
  apdateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.baseUrl}/Customer`,customer,
      {headers: { 'content-type': "application/json" }}
    )
  }
}

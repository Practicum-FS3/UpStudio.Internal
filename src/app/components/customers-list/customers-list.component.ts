import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/Models/customer.model';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CustomerService } from 'src/app/Services/customers.service';
import { AccordionModule } from 'primeng/accordion';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];
  displayedCustomers: Customer[] = [];
  selectedCustomerId?: number;
  addCust?:boolean

  private searchTerms = new Subject<{ name: string, email: string, id: string }>();
  currentPage = 1;
  itemsPerPage = 10; // הצגה של 10 לקוחות בעמוד

  constructor(private _customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {
    this.setupSearch();
    this._customerService.getCustomertFromServer().subscribe(customers => {
      this.customers = customers;
      this.updateDisplayedCustomers();
    });
  }

  navigateToAddCustomer(): void {
    // this._router.navigate(['/add-customer']);
    this.addCust=true
  }

  filterBySearch(name: string, email: string): void {
    this.searchTerms.next({ name, email, id: '' });
  }

  setupSearch() {
    this.searchTerms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.name === '' && term.email === '') {
          return this._customerService.getCustomertFromServer();
        } else if (term.name !== '') {
          return this._customerService.getCustomerByName(term.name);
        } else {
          return this._customerService.getCustomerByEmail(term.email);
        }
      })
    ).subscribe(data => {
      if (Array.isArray(data)) {
        this.customers = data;
      } else {
        this.customers = data ? [data] : [];
      }
      this.currentPage = 1;
      this.updateDisplayedCustomers();
    });
  }

  updateDisplayedCustomers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCustomers = this.customers.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if ((this.currentPage * this.itemsPerPage) < this.customers.length) {
      this.currentPage++;
      this.updateDisplayedCustomers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCustomers();
    }
  }
  selectCust(custId: number): void { 
    this.selectedCustomerId = custId;
  }

}

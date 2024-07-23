import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

const routes: Routes = [
  { path: 'customers-list', component: CustomersListComponent },
  // { path: 'add-customer', component: RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

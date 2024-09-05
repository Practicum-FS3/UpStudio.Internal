import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { HomeComponent } from './components/home/home.component';
import { TrainersListComponent } from './components/trainers-list/trainers-list.component';
import { ManagmentTableComponent } from './components/managment-table/managment-table.component';

const routes: Routes = [
  {path:'',component:ManagmentTableComponent},

  // {path:'',component:HomeComponent},
  { path: 'customers-list', component: CustomersListComponent },
  { path: 'single-lesson', component: SingleLessonComponent },
  { path: 'customer-card/:id', component: CustomerCardComponent },
  { path: 'trainers-list', component:TrainersListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

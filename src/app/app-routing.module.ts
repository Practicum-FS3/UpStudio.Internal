import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component';

const routes: Routes = [
  { path: 'customers-list', component: CustomersListComponent },
  { path: 'single-lesson', component: SingleLessonComponent },
  { path: 'customer-card/:id', component: CustomerCardComponent },
  { path: 'trainings-list', component: TrainingsListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

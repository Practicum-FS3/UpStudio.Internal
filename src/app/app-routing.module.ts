import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';

const routes: Routes = [
  // { path: 'customers-list', component: CustomersListComponent },
  { path: 'single-lesson', component: SingleLessonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

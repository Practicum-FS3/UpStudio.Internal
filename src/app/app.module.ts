import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from './Services/customers.service';
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { TrainingService } from './Services/trainig.servisec';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionOptionsComponent } from './components/Subscriptions/subscription-options/subscription-options.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SubscriptionService } from './Services/SubscriptionService';
import { SubscriptionFormComponent } from './components/Subscriptions/subscription-form/subscription-form.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { CustomerCardComponent } from "./components/customer-card/customer-card.component";
import { TrainingCustomerService } from './Services/trainingCustomer.service';
import { TrainingTypeService } from './Services/trainingType.service';
import { TrainerService } from './Services/trainer.service';
import { AvailableTraining } from './Models/availableTraining.model';
import { AvailableTrainingService } from './Services/availableTraining.service';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component';
import {CustomerTrainingsDeatailsService } from './Services/customerTrainingsDeatails.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    SingleLessonComponent,
    SubscriptionOptionsComponent,
    SubscriptionFormComponent,
    TrainingsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    SpeedDialModule,
    FieldsetModule,
    InputNumberModule,
    CustomerCardComponent,
    CalendarModule
],
  providers: [CustomerService, TrainingService, SubscriptionService,TrainingCustomerService,TrainingTypeService,TrainerService,AvailableTrainingService,CustomerTrainingsDeatailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

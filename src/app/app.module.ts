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
import { FormsModule } from '@angular/forms';
import { SubscriptionOptionsComponent } from './components/Subscriptions/subscription-options/subscription-options.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SubscriptionService } from './Services/SubscriptionService';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './components/Subscriptions/subscription-form/subscription-form.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ContentTypeComponent } from './components/content-type/content-type.component';
import { UpdateContentComponent } from './components/content-type/update-content/update-content.component';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    SingleLessonComponent,
    AppComponent,
    SubscriptionOptionsComponent,
    SubscriptionFormComponent,
    ContentTypeComponent,
    UpdateContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,FormsModule,
    ReactiveFormsModule,
    TableModule,
    SpeedDialModule,
    DialogModule, 
    CardModule

  ],
  providers: [CustomerService,TrainingService,
    ButtonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    SpeedDialModule,
    InputTextModule,
    FieldsetModule,
    InputNumberModule,
    SubscriptionService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


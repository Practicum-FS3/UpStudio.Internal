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
import { SubscriptionOptionsComponent } from './components/Subscriptions/subscription-options/subscription-options.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SubscriptionService } from './Services/SubscriptionService';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './components/Subscriptions/subscription-form/subscription-form.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    AppComponent,
    SubscriptionOptionsComponent,
    SubscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
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
    SplitButtonModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule
  ],
  providers: [CustomerService,SubscriptionService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }


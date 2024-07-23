import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionOptionsComponent } from './components/Subscriptions/subscription-options/subscription-options.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SubscriptionService } from './Services/SubscriptionService';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './components/Subscriptions/subscription-form/subscription-form.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SubscriptionOptionsComponent,
    SubscriptionFormComponent,
  ],
  imports: [
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
  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

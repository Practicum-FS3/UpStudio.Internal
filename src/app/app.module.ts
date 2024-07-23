import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { TrainingService } from './Services/trainig.servisec';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SingleLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

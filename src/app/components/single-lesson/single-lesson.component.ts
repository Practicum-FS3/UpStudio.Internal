//יש לך בעיות עם הדף הזה? אני אשמח אם תוכלי להסתיר אותו ולא לשנות בו דברים 
//הוא עוד לא סופי ויתכן ויהיו בו בעיות

import { Component, Input } from '@angular/core';
import { Training } from '../../Models/Training.model';
import { FormControl, NgModel } from '@angular/forms';
import { Time } from '../../Models/Time.model';
import { InputTextModule } from 'primeng/inputtext';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Trainer } from 'src/app/Models/trainer.model';
import { TrainingType } from 'src/app/Models/trainingType.model';
import { TrainerService } from 'src/app/Services/trainers.service';
import { TrainingTypeService } from 'src/app/Services/trainingType.service';
import { TrainingService } from 'src/app/Services/training.servisec';
import { Title } from '@angular/platform-browser';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TrainingCustomerType } from 'src/app/Models/trainingCustomerType.model';
import { TrainingCustomerTypeService } from 'src/app/Services/trainingCustomerType.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-single-lesson',
  templateUrl: './single-lesson.component.html',
  styleUrls: ['./single-lesson.component.scss']
})
export class SingleLessonComponent {
  @Input() id: number = 1;
  flage: number = 2;
  thistrain: Training = new Training(0, 0, 0, 0, "", "", "", "", 0, true);
  alltrainer: Trainer[] = [];
  alltrainerActive: Trainer[] = [];
  trainingCustomerTypeActive!: TrainingCustomerType;
  alltrainingCustomerType: TrainingCustomerType[] = [];
  alltrainingCustomerTypeActive: TrainingCustomerType[] = [];
  alltrainingType = [{ title: "fhsd", code: 544 }, { title: "poiu", code: 3653 }];
  selectedValue: number = 0; // משתנה חדש לאחסון הערך שנבחר ב־<select>

  form: FormGroup;

  numberRangeValidatorday(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== null && (isNaN(control.value) || control.value < 1 || control.value > 6)) {
      return { 'invalidNumberRange': true };
    }
    return null;
  }


  numberRangeValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== null && (isNaN(control.value) || control.value < 1 || control.value > 6)) {
      return { 'invalidNumberRange': true };
    }
    return null;
  }



  selectedTrainingType: any;
  onTrainingTypeSelect(event: any) {
    this.selectedTrainingType = event.value;
  }
  constructor(private _trainingService: TrainingService, private _trainingTypeService: TrainingTypeService,
    private _trainerService: TrainerService, private _trainingCustomerTypeService: TrainingCustomerTypeService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      dayOfWeek: [null, [Validators.required, this.numberRangeValidator]]
    });
    }
    // saveSelectedTrainingCustomerTypeValue(selectedVal: number) {
    //   console.log({selectedVal});
    //   this.alltrainingCustomerType.forEach(item => {
    //     if (this.selectedValue === item.TrainingTypeID) {
    //       console.log("item.trainingTypeID " + item.TrainingTypeID);

    //       this.arrNumCustomer.add(item.CustomerTypeID);
    //     }
    //   });
    ngOnInit() {
      //TrainingCustomerType מערך של כל הדברים מטבלה
      this._trainingCustomerTypeService.getTrainingCustomerTypeFromServer().subscribe(
        action => {
          this.alltrainingCustomerType = action;

          this.alltrainingCustomerType.forEach(item => {
            if (item.isActive) {
              this.alltrainingCustomerTypeActive.push(item)
            }
          });
        },
        error => {
          console.error("Error fetching training customer types: ", error);
        }
      );

    this._trainerService.getTrainerFromServer().subscribe(
      action => {
        this.alltrainer = action
        this.alltrainer.forEach(item => {
          if (item.isActive) {
            this.alltrainerActive.push(item)
          }
        });
      }
    );

    if (this.id == 0) {
      this.flage = 0//הוספת אימון חדש
    }
    else {
      this.flage = 1//אימון קיים
      this._trainingService.getTrainingById(this.id).subscribe(
        action => {

          this.thistrain = action;

        },
        error => {
          if (error.status === 404) {
            this.flage = 2; // לא נמצא אימון
          }
        }
      );
    }
  }
  TCTSelectedOption(event: any): void {
    const selectedValue = event.target['value'];
    this.thistrain.trainingCustomerTypeId = selectedValue;
    this.alltrainingCustomerType.forEach(item => {
      if (item.id == selectedValue) {
        this.thistrain.trainingCustomerTypeName = item.trainingCustomerName
      }

    })
    alert(this.thistrain.trainingCustomerTypeId)

  }
  TrainerSelectedOption(event: any): void {
    const selectedValue = event.target['value'];
    this.thistrain.trainerID = selectedValue;
    this.alltrainerActive.forEach(item => {
      if (item.id == selectedValue) {
        this.thistrain.trainerName = item.firstName + ' ' + item.lastName
        alert("item.trainer " + item.firstName + ' ' + item.lastName)
        alert("this.thistrain.trainerName " + this.thistrain.trainerName)
      }

    })
  }
  saveChanges(flag: number) {
    if (flag == 1) {
      this._trainingService.UpdateTrainingById(this.id, this.thistrain).subscribe(
        response => { alert("האימון עודכן בהצלחה במסד הנתונים " + this.thistrain.dayOfWeek) },
        error => { if (error.status === 500) { console.log("500"); } }
      )
    }
    else {
      //לבדוק האם הוא אכן תופס את השגיאות ששלחתי לו בסאווגר
      this._trainingService.addTraining(this.thistrain).subscribe(response => {
        alert("האימון נוסף בהצלחה למסד הנתונים")
      },
        error => {
          console.error('An error occurred:', error);
          // Handle error response
        }
      )
    }
  }
}
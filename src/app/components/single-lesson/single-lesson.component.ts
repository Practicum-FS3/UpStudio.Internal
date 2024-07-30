import { Component, Input } from '@angular/core';
import { TrainingService } from 'src/app/Services/trainig.servisec';
import { NgModel } from '@angular/forms';
import { Time } from '../../Models/Time.model';
import { InputTextModule } from 'primeng/inputtext';
import { Training } from 'src/app/Models/Training.model';



@Component({
  selector: 'app-single-lesson',
  templateUrl: './single-lesson.component.html',
  styleUrls: ['./single-lesson.component.scss']
})
export class SingleLessonComponent {
  @Input() id: number = 1;
  flage: number = 2;
  thistrain: Training = new Training(0, 0, 0, 0, new Time(0, 0), 0, true);

  constructor(private _trainingService: TrainingService) {
  }

  ngOnInit() {
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
            this.flage = 2//לא נמצא אימון
          }
        }
      );
    }
  }
  saveChanges(flag: number) {
    if (flag == 1) {
      this._trainingService.UpdateTrainingById(this.id, this.thistrain).subscribe(response => {});
    }
    else {
      this._trainingService.addTraining(this.thistrain).subscribe(response => {});
    }
  }

}
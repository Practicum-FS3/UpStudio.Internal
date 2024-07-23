import { Component, Input } from '@angular/core';
import { TrainingService } from 'src/app/Services/trainig.servisec';
import { Training } from './models/Training.model';
import { NgModel } from '@angular/forms';
import { Time } from './models/Time.model';
import { InputTextModule } from 'primeng/inputtext';



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
      this.flage = 0
    }
    else {
      this.flage = 1
      this._trainingService.getTrainingById(this.id).subscribe(
        action => {
          this.thistrain = action;
        },
        error => {
          if (error.status === 404) {
            this.flage = 2
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
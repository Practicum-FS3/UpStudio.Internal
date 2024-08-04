import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HMO } from 'src/app/Models/HMO.model';

@Component({
  selector: 'app-add-hmos',
  templateUrl: './add-hmos.component.html',
  styleUrls: ['./add-hmos.component.scss']
})
export class AddHMOsComponent {

  @Input() item: HMO = new HMO();
  @Output() onSave = new EventEmitter<any>();
  display: boolean = false;

  show() {
    this.display = true;
  }

  save() {
    this.item.isActive = true
    this.onSave.emit(this.item);
    this.display = false;
    
  }
}

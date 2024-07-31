import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentType } from 'src/app/Models/ContentType.model';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.scss']
})
export class UpdateContentComponent {

  @Input() item: ContentType = new ContentType();
  @Output() onSave = new EventEmitter<any>();
  display: boolean = false;

  show() {
    this.display = true;
  }

  save() {
    this.onSave.emit(this.item);
    this.display = false;
    
  }
}

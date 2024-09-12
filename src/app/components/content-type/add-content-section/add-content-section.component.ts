import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentSection } from 'src/app/Models/content-section.module';

@Component({
  selector: 'app-add-content-section',
  templateUrl: './add-content-section.component.html',
  styleUrls: ['./add-content-section.component.scss']
})
export class AddContentSectionComponent {

  
  @Input() item: ContentSection = new ContentSection();
  @Output() onSave = new EventEmitter<any>();
  display: boolean = false;
  selectedFile: File | undefined = undefined;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // this.fileName = file.name;
    }
  }

  show() {
    this.display = true;
  }

  save() {
    this.item.image = this.selectedFile
    this.onSave.emit(this.item);
    this.display = false;
    
  }
}

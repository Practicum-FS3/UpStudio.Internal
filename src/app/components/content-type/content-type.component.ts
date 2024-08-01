import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentTypeServiseService } from 'src/app/Services/content-type-servise.service';
import { ContentType } from 'src/app/Models/ContentType.model';
import { UpdateContentComponent } from './update-content/update-content.component';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss']
})
export class ContentTypeComponent implements OnInit {

  @ViewChild(UpdateContentComponent) updateContentComponent!: UpdateContentComponent;
  selectedContent: ContentType = new ContentType()
  update:boolean = false;
  
  allCT: Array<ContentType> = new Array<ContentType>;
  constructor(public ctServise: ContentTypeServiseService) { }
  ngOnInit(): void {
    this.ctServise.getAllContentType().subscribe(d =>
      this.allCT = d
    )

  }

  edit(id: number) {

    this.ctServise.getContentTypeById(id).subscribe(succ => {
      this.selectedContent = succ

     }
     )
    this.update = true
  }

  Save(content: ContentType) {
    if (content.id != 0) {
      this.ctServise.updateC(content.id, content).subscribe(a => {
        this.ctServise.getAllContentType().subscribe(d =>{
          this.allCT = d
          this.update = false
          }
        )
      })
    } else {
      content.isActive = true
      this.ctServise.addContentType(content).subscribe(a => {
        this.ctServise.getAllContentType().subscribe(d =>
          this.allCT = d
        )
      })
    }

  }

  Close(){
    this.update = false
  }

  add() {
    this.selectedContent = new ContentType()

    if (this.updateContentComponent) {
      this.updateContentComponent.item = this.selectedContent;
      this.updateContentComponent.show();
    }
  }
}

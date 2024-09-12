import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentTypeServiseService } from 'src/app/Services/content-type-servise.service';
import { ContentType } from 'src/app/Models/ContentType.model';
import { UpdateContentComponent } from './update-content/update-content.component';
import { ContentSection } from 'src/app/Models/content-section.module';
import { ContentSectionServiseService } from 'src/app/Services/content-section.service';
import { AddContentSectionComponent } from './add-content-section/add-content-section.component';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss']
})
export class ContentTypeComponent implements OnInit {

  @ViewChild(UpdateContentComponent) updateContentComponent!: UpdateContentComponent;
  @ViewChild(AddContentSectionComponent) addContentSectionComponent!: AddContentSectionComponent;

  selectedContent: ContentType = new ContentType()
  selectedContentSection: ContentSection = new ContentSection()

  update: boolean = false;
  updateN: number = 0;

  urlImg: string = ""

  allCT: Array<ContentType> = new Array<ContentType>;
  ContentSections: Array<ContentSection> = new Array<ContentSection>;
  constructor(public ctServise: ContentTypeServiseService, public csServise: ContentSectionServiseService) { }
  ngOnInit(): void {
    this.ctServise.getAllContentType().subscribe(d => {
      this.allCT = d
      this.urlImg = 'data:image/png;base64,'
    }
    )
  }

  updatecs(id: number) {
    this.updateN = id
    this.csServise.getContentSectionById(id).subscribe(succ => {
      this.selectedContentSection = succ
      console.log(this.selectedContentSection);
      
    }
    )
  }

  cancel() {
    this.updateN = 0
  }

  saveUp(content: ContentSection) {
    this.updateN = 0
    this.csServise.updateC(content).subscribe(a => {
      // this.csServise.getAllContentSection().subscribe(d =>{
      //   this.allCT = d
      //   this.update = false
      //   }
      // )
      this.allCS(content.contentTypeID!)
    })
  }

  delete(id: number, ctId: number) {
    this.csServise.deleteC(id).subscribe(succ => {
      console.log("succ");
      this.allCS(ctId)

    })
  }
  allCS(id: number) {
    if(this.updateN == 0){
      this.csServise.getContentSectionByContentTypeId(id).subscribe(cs => {
        this.ctServise.getContentTypeById(id).subscribe(ct => {
          ct.contentSections = cs
          this.ContentSections = cs
        })
      })
  
    }
    
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
      this.ctServise.updateC(content).subscribe(a => {
        this.ctServise.getAllContentType().subscribe(d => {
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

  Savecs(content: ContentSection) {
    console.log(content);
    
    if (content.id != 0) {
      this.csServise.updateC(content).subscribe(a => {
        this.allCS(content.contentTypeID!)
      })
    } else {
      content.isActive = true
      this.csServise.addContentSection(content).subscribe(a => {
        this.allCS(content.contentTypeID!)
        
      })
    }

  }

  Close() {
    this.update = false
  }

  add() {
    this.selectedContent = new ContentType()

    if (this.updateContentComponent) {
      this.updateContentComponent.item = this.selectedContent;
      this.updateContentComponent.show();
    }
  }

  addCSe(id: number) {
    this.selectedContentSection = new ContentSection()
    if (this.addContentSectionComponent) {
      this.addContentSectionComponent.item = this.selectedContentSection;
      this.selectedContentSection.contentTypeID = id
      if(this.selectedContentSection.viewInHP == undefined){
          this.selectedContentSection.viewInHP = false
      }
      this.addContentSectionComponent.show();
    }
  }
}

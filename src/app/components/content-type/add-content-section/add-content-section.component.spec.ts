import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentSectionComponent } from './add-content-section.component';

describe('AddContentSectionComponent', () => {
  let component: AddContentSectionComponent;
  let fixture: ComponentFixture<AddContentSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContentSectionComponent]
    });
    fixture = TestBed.createComponent(AddContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

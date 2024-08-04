import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHMOsComponent } from './add-hmos.component';

describe('AddHMOsComponent', () => {
  let component: AddHMOsComponent;
  let fixture: ComponentFixture<AddHMOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHMOsComponent]
    });
    fixture = TestBed.createComponent(AddHMOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

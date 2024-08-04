import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMOsComponent } from './hmos.component';

describe('HMOsComponent', () => {
  let component: HMOsComponent;
  let fixture: ComponentFixture<HMOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HMOsComponent]
    });
    fixture = TestBed.createComponent(HMOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

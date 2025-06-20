import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducBgComponent } from './educ-bg.component';

describe('EducBgComponent', () => {
  let component: EducBgComponent;
  let fixture: ComponentFixture<EducBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducBgComponent]
    });
    fixture = TestBed.createComponent(EducBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

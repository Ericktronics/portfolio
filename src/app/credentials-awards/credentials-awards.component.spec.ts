import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsAwardsComponent } from './credentials-awards.component';

describe('CredentialsAwardsComponent', () => {
  let component: CredentialsAwardsComponent;
  let fixture: ComponentFixture<CredentialsAwardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredentialsAwardsComponent]
    });
    fixture = TestBed.createComponent(CredentialsAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

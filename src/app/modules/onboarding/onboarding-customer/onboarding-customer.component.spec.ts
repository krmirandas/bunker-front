import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingCustomerComponent } from './onboarding-customer.component';

describe('OnboardingCustomerComponent', () => {
  let component: OnboardingCustomerComponent;
  let fixture: ComponentFixture<OnboardingCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

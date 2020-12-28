import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPetsitterComponent } from './onboarding-petsitter.component';

describe('OnboardingPetsitterComponent', () => {
  let component: OnboardingPetsitterComponent;
  let fixture: ComponentFixture<OnboardingPetsitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPetsitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

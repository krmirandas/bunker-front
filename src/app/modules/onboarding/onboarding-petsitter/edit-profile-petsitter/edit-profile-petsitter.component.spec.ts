import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePetsitterComponent } from './edit-profile-petsitter.component';

describe('EditProfilePetsitterComponent', () => {
  let component: EditProfilePetsitterComponent;
  let fixture: ComponentFixture<EditProfilePetsitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilePetsitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilePetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

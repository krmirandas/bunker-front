import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetSitterComponent } from './register-pet-sitter.component';

describe('RegisterPetSitterComponent', () => {
  let component: RegisterPetSitterComponent;
  let fixture: ComponentFixture<RegisterPetSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPetSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPetSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

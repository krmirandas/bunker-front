import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcuidadoresComponent } from './listcuidadores.component';

describe('ListcuidadoresComponent', () => {
  let component: ListcuidadoresComponent;
  let fixture: ComponentFixture<ListcuidadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcuidadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcuidadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMachineEditComponent } from './form-machine-edit.component';

describe('FormMachineEditComponent', () => {
  let component: FormMachineEditComponent;
  let fixture: ComponentFixture<FormMachineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMachineEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMachineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

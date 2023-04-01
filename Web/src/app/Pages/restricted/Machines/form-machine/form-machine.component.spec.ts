import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMachineComponent } from './form-machine.component';

describe('FormMachineComponent', () => {
  let component: FormMachineComponent;
  let fixture: ComponentFixture<FormMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

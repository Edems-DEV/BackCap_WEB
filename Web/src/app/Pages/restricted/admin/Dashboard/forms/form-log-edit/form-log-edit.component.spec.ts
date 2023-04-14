import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogEditComponent } from './form-log-edit.component';

describe('FormLogEditComponent', () => {
  let component: FormLogEditComponent;
  let fixture: ComponentFixture<FormLogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLogEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

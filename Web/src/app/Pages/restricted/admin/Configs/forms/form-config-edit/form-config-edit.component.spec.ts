import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigEditComponent } from './form-config-edit.component';

describe('FormConfigEditComponent', () => {
  let component: FormConfigEditComponent;
  let fixture: ComponentFixture<FormConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

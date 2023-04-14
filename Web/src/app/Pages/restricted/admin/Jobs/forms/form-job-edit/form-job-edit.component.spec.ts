import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobEditComponent } from './form-job-edit.component';

describe('FormJobEditComponent', () => {
  let component: FormJobEditComponent;
  let fixture: ComponentFixture<FormJobEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormJobEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJobEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

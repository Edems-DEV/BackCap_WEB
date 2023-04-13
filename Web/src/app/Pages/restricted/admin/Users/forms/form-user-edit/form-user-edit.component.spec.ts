import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserEditComponent } from './form-user-edit.component';

describe('FormUserEditComponent', () => {
  let component: FormUserEditComponent;
  let fixture: ComponentFixture<FormUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupCreateComponent } from './form-group-create.component';

describe('FormGroupCreateComponent', () => {
  let component: FormGroupCreateComponent;
  let fixture: ComponentFixture<FormGroupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

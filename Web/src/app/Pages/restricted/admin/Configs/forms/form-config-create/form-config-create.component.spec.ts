import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigCreateComponent } from './form-config-create.component';

describe('FormConfigCreateComponent', () => {
  let component: FormConfigCreateComponent;
  let fixture: ComponentFixture<FormConfigCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfigCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

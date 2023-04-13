import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserCreateComponent } from './form-user-create.component';

describe('FormUserCreateComponent', () => {
  let component: FormUserCreateComponent;
  let fixture: ComponentFixture<FormUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFlPasswordComponent } from './input-fl-password.component';

describe('InputFlPasswordComponent', () => {
  let component: InputFlPasswordComponent;
  let fixture: ComponentFixture<InputFlPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFlPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFlPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

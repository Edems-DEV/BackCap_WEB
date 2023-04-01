import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextLongComponent } from './input-text-long.component';

describe('InputTextLongComponent', () => {
  let component: InputTextLongComponent;
  let fixture: ComponentFixture<InputTextLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

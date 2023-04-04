import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFlTextComponent } from './input-fl-text.component';

describe('InputFlTextComponent', () => {
  let component: InputFlTextComponent;
  let fixture: ComponentFixture<InputFlTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFlTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

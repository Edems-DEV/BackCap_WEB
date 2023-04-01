import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPathComponent } from './input-path.component';

describe('InputPathComponent', () => {
  let component: InputPathComponent;
  let fixture: ComponentFixture<InputPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

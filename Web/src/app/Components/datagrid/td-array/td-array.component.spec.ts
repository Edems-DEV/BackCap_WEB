import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdArrayComponent } from './td-array.component';

describe('TdArrayComponent', () => {
  let component: TdArrayComponent;
  let fixture: ComponentFixture<TdArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMachinesComponent } from './stats-machines.component';

describe('StatsMachinesComponent', () => {
  let component: StatsMachinesComponent;
  let fixture: ComponentFixture<StatsMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

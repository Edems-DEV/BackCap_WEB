import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsJobsComponent } from './stats-jobs.component';

describe('StatsJobsComponent', () => {
  let component: StatsJobsComponent;
  let fixture: ComponentFixture<StatsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

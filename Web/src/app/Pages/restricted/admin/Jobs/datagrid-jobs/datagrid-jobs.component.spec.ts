import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridJobsComponent } from './datagrid-jobs.component';

describe('DatagridJobsComponent', () => {
  let component: DatagridJobsComponent;
  let fixture: ComponentFixture<DatagridJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

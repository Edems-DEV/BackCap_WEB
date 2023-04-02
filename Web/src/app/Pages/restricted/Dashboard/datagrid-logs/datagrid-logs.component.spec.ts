import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridLogsComponent } from './datagrid-logs.component';

describe('DatagridLogsComponent', () => {
  let component: DatagridLogsComponent;
  let fixture: ComponentFixture<DatagridLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridMachinesComponent } from './datagrid-machines.component';

describe('DatagridMachinesComponent', () => {
  let component: DatagridMachinesComponent;
  let fixture: ComponentFixture<DatagridMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

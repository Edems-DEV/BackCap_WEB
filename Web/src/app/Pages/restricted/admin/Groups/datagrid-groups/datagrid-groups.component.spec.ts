import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridGroupsComponent } from './datagrid-groups.component';

describe('DatagridGroupsComponent', () => {
  let component: DatagridGroupsComponent;
  let fixture: ComponentFixture<DatagridGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

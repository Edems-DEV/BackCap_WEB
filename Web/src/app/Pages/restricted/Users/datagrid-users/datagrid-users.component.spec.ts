import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridUsersComponent } from './datagrid-users.component';

describe('DatagridUsersComponent', () => {
  let component: DatagridUsersComponent;
  let fixture: ComponentFixture<DatagridUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

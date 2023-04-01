import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridPaginationComponent } from './datagrid-pagination.component';

describe('DatagridPaginationComponent', () => {
  let component: DatagridPaginationComponent;
  let fixture: ComponentFixture<DatagridPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridConfigsComponent } from './datagrid-configs.component';

describe('DatagridConfigsComponent', () => {
  let component: DatagridConfigsComponent;
  let fixture: ComponentFixture<DatagridConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridConfigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

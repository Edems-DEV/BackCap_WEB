import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMachinesComponent } from './page-machines.component';

describe('PageMachinesComponent', () => {
  let component: PageMachinesComponent;
  let fixture: ComponentFixture<PageMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

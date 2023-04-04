import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfigsComponent } from './page-configs.component';

describe('PageConfigsComponent', () => {
  let component: PageConfigsComponent;
  let fixture: ComponentFixture<PageConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConfigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

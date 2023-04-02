import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBtnSettingsComponent } from './sidebar-btn-settings.component';

describe('SidebarBtnSettingsComponent', () => {
  let component: SidebarBtnSettingsComponent;
  let fixture: ComponentFixture<SidebarBtnSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBtnSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBtnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

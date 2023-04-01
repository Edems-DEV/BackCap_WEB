import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CardLoginComponent } from './Pages/LogIn/card-login/card-login.component';
import { CardStatsComponent } from './Components/card-stats/card-stats.component';
import { DatagridComponent } from './Components/datagrid/datagrid.component';
import { PageDashboardComponent } from './Pages/restricted/Dashboard/page-dashboard/page-dashboard.component';
import { FormConfigComponent } from './Pages/restricted/Configs/form-config/form-config.component';
import { InputPathComponent } from './Components/input-my/input-path/input-path.component';
import { InputMultiselectComponent } from './Components/input-my/input-multiselect/input-multiselect.component';
import { SidebarBtnComponent } from './Components/sidebar/sidebar-btn/sidebar-btn.component';
import { PageConfigsComponent } from './Pages/restricted/Configs/page-configs/page-configs.component';
import { PageGroupsComponent } from './Pages/restricted/Groups/page-groups/page-groups.component';
import { PageJobsComponent } from './Pages/restricted/Jobs/page-jobs/page-jobs.component';
import { PageMachinesComponent } from './Pages/restricted/Machines/page-machines/page-machines.component';
import { PageUsersComponent } from './Pages/restricted/Users/page-users/page-users.component';
import { PageLoginComponent } from './Pages/LogIn/page-login/page-login.component';
import { InputTextComponent } from './Components/input-my/_basic/input-text/input-text.component';
import { InputTextLongComponent } from './Components/input-my/_basic/input-text-long/input-text-long.component';
import { InputSelectComponent } from './Components/input-my/_basic/input-select/input-select.component';
import { InputNumberComponent } from './Components/input-my/_basic/input-number/input-number.component';
import { InputDateComponent } from './Components/input-my/_basic/input-date/input-date.component';
import { InputCronComponent } from './Components/input-my/input-cron/input-cron.component';
import { InputSwitchComponent } from './Components/input-my/_basic/input-switch/input-switch.component';
import { FormUserComponent } from './Pages/restricted/Users/form-user/form-user.component';
import { FormGroupComponent } from './Pages/restricted/Groups/form-group/form-group.component';
import { FormMachineComponent } from './Pages/restricted/Machines/form-machine/form-machine.component';
import { FormJobComponent } from './Pages/restricted/Jobs/form-job/form-job.component';
import { FormCoreComponent } from './Components/form-core/form-core.component';
import { AdminCoreComponent } from './Components/admin-core/admin-core.component';
import { SectionComponent } from './Components/section/section.component';
import { DatagridFilterComponent } from './Components/datagrid/datagrid-filter/datagrid-filter.component';
import { DatagridPaginationComponent } from './Components/datagrid/datagrid-pagination/datagrid-pagination.component';
import { BtnAddComponent } from './Components/datagrid/btn-add/btn-add.component';
import { DatagridConfigsComponent } from './Pages/restricted/Configs/datagrid-configs/datagrid-configs.component';
import { DatagridGroupsComponent } from './Pages/restricted/Groups/datagrid-groups/datagrid-groups.component';
import { DatagridJobsComponent } from './Pages/restricted/Jobs/datagrid-jobs/datagrid-jobs.component';
import { DatagridMachinesComponent } from './Pages/restricted/Machines/datagrid-machines/datagrid-machines.component';
import { DatagridUsersComponent } from './Pages/restricted/Users/datagrid-users/datagrid-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardLoginComponent,
    CardStatsComponent,
    DatagridComponent,
    PageDashboardComponent,
    FormConfigComponent,
    InputPathComponent,
    InputMultiselectComponent,
    SidebarBtnComponent,
    PageConfigsComponent,
    PageGroupsComponent,
    PageJobsComponent,
    PageMachinesComponent,
    PageUsersComponent,
    PageLoginComponent,
    InputTextComponent,
    InputTextLongComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputDateComponent,
    InputCronComponent,
    InputSwitchComponent,
    FormUserComponent,
    FormGroupComponent,
    FormMachineComponent,
    FormJobComponent,
    FormCoreComponent,
    AdminCoreComponent,
    SectionComponent,
    DatagridFilterComponent,
    DatagridPaginationComponent,
    BtnAddComponent,
    DatagridConfigsComponent,
    DatagridGroupsComponent,
    DatagridJobsComponent,
    DatagridMachinesComponent,
    DatagridUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

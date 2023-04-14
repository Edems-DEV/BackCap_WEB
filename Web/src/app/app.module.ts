import { NgParticlesModule } from 'ng-particles';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CardLoginComponent } from './Pages/LogIn/card-login/card-login.component';
import { CardStatsComponent } from './Components/card-stats/card-stats.component';
import { DatagridComponent } from './Components/datagrid/datagrid.component';
import { PageDashboardComponent } from './Pages/restricted/admin/Dashboard/page-dashboard/page-dashboard.component';
import { FormConfigComponent } from './Pages/restricted/admin/Configs/form-config/form-config.component';
import { InputPathComponent } from './Components/input-my/input-path/input-path.component';
import { InputMultiselectComponent } from './Components/input-my/input-multiselect/input-multiselect.component';
import { SidebarBtnComponent } from './Components/sidebar/sidebar-btn/sidebar-btn.component';
import { PageConfigsComponent } from './Pages/restricted/admin/Configs/page-configs/page-configs.component';
import { PageGroupsComponent } from './Pages/restricted/admin/Groups/page-groups/page-groups.component';
import { PageJobsComponent } from './Pages/restricted/admin/Jobs/page-jobs/page-jobs.component';
import { PageMachinesComponent } from './Pages/restricted/admin/Machines/page-machines/page-machines.component';
import { PageUsersComponent } from './Pages/restricted/admin/Users/page-users/page-users.component';
import { PageLoginComponent } from './Pages/LogIn/page-login/page-login.component';
import { InputTextComponent } from './Components/input-my/_basic/input-text/input-text.component';
import { InputTextLongComponent } from './Components/input-my/_basic/input-text-long/input-text-long.component';
import { InputSelectComponent } from './Components/input-my/_basic/input-select/input-select.component';
import { InputNumberComponent } from './Components/input-my/_basic/input-number/input-number.component';
import { InputDateComponent } from './Components/input-my/_basic/input-date/input-date.component';
import { InputCronComponent } from './Components/input-my/input-cron/input-cron.component';
import { InputSwitchComponent } from './Components/input-my/_basic/input-switch/input-switch.component';
import { FormUserComponent } from './Pages/restricted/admin/Users/forms/form-user/form-user.component';
import { FormGroupComponent } from './Pages/restricted/admin/Groups/form-group/form-group.component';
import { FormMachineComponent } from './Pages/restricted/admin/Machines/form-machine/form-machine.component';
import { FormJobComponent } from './Pages/restricted/admin/Jobs/form-job/form-job.component';
import { FormCoreComponent } from './Components/form-core/form-core.component';
import { SectionComponent } from './Components/section/section.component';
import { DatagridFilterComponent } from './Components/datagrid/datagrid-filter/datagrid-filter.component';
import { DatagridPaginationComponent } from './Components/datagrid/datagrid-pagination/datagrid-pagination.component';
import { BtnAddComponent } from './Components/datagrid/btn-add/btn-add.component';
import { DatagridConfigsComponent } from './Pages/restricted/admin/Configs/datagrid-configs/datagrid-configs.component';
import { DatagridGroupsComponent } from './Pages/restricted/admin/Groups/datagrid-groups/datagrid-groups.component';
import { DatagridJobsComponent } from './Pages/restricted/admin/Jobs/datagrid-jobs/datagrid-jobs.component';
import { DatagridMachinesComponent } from './Pages/restricted/admin/Machines/datagrid-machines/datagrid-machines.component';
import { DatagridUsersComponent } from './Pages/restricted/admin/Users/datagrid-users/datagrid-users.component';
import { StatsJobsComponent } from './Pages/restricted/admin/Jobs/stats-jobs/stats-jobs.component';
import { StatsMachinesComponent } from './Pages/restricted/admin/Machines/stats-machines/stats-machines.component';
import { AdminComponent } from './Pages/restricted/admin/admin.component';
import { SidebarBtnSettingsComponent } from './Components/sidebar/sidebar-btn-settings/sidebar-btn-settings.component';
import { TdArrayComponent } from './Components/datagrid/td-array/td-array.component';
import { DatagridLogsComponent } from './Pages/restricted/admin/Dashboard/datagrid-logs/datagrid-logs.component';
import { FormLogComponent } from './Pages/restricted/admin/Dashboard/form-log/form-log.component';
import { InputCheckboxComponent } from './Components/input-my/_basic/input-checkbox/input-checkbox.component';
import { InputPasswordComponent } from './Components/input-my/_basic/input-password/input-password.component';
import { InputFlPasswordComponent } from './Components/input-my/_basic/input-fl-password/input-fl-password.component';
import { InputFlTextComponent } from './Components/input-my/_basic/input-fl-text/input-fl-text.component';
import { ParticlesJsComponent } from './Pages/LogIn/particles-js/particles-js.component';
import { MyIconComponent } from './Components/_other/my-icon/my-icon.component';
import { FormUserCreateComponent } from './Pages/restricted/admin/Users/forms/form-user-create/form-user-create.component';
import { FormUserEditComponent } from './Pages/restricted/admin/Users/forms/form-user-edit/form-user-edit.component';
import { FieldErrorsComponent } from './Components/input-my/_other/field-errors/field-errors.component';

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
    SectionComponent,
    DatagridFilterComponent,
    DatagridPaginationComponent,
    BtnAddComponent,
    DatagridConfigsComponent,
    DatagridGroupsComponent,
    DatagridJobsComponent,
    DatagridMachinesComponent,
    DatagridUsersComponent,
    StatsJobsComponent,
    StatsMachinesComponent,
    AdminComponent,
    SidebarBtnSettingsComponent,
    TdArrayComponent,
    DatagridLogsComponent,
    FormLogComponent,
    InputCheckboxComponent,
    InputPasswordComponent,
    InputFlPasswordComponent,
    InputFlTextComponent,
    ParticlesJsComponent,
    MyIconComponent,
    FormUserCreateComponent,
    FormUserEditComponent,
    FieldErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgParticlesModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

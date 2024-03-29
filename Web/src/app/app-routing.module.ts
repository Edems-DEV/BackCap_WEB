import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './Pages/restricted/admin/Dashboard/page-dashboard/page-dashboard.component';
import { PageGroupsComponent } from './Pages/restricted/admin/Groups/page-groups/page-groups.component';
import { PageMachinesComponent } from './Pages/restricted/admin/Machines/page-machines/page-machines.component';
import { PageJobsComponent } from './Pages/restricted/admin/Jobs/page-jobs/page-jobs.component';
import { PageUsersComponent } from './Pages/restricted/admin/Users/page-users/page-users.component';
import { PageLoginComponent } from './Pages/LogIn/page-login/page-login.component';
import { AdminComponent } from './Pages/restricted/admin/admin.component';
import { PageConfigsComponent } from './Pages/restricted/admin/Configs/page-configs/page-configs.component';
import { FormUserComponent } from './Pages/restricted/admin/Users/forms/form-user/form-user.component';
import { AuthGuard } from './services/auth/auth.guard';

// prettier-ignore
const routes: Routes = [
  //[Unrestricted/admin]
  { title: 'BackCap - LogIn', path: 'login', component: PageLoginComponent },
  //[restricted/admin]
  {
    path: 'admin',
    title: 'BackCap - Admin',
    component: AdminComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: PageDashboardComponent },
      { path: 'groups', component: PageGroupsComponent },
      { path: 'machines', component: PageMachinesComponent },
      { path: 'jobs', component: PageJobsComponent },
      { path: 'users', component: PageUsersComponent },
      { path: 'configs', component: PageConfigsComponent },
      //edits
      { path: 'users/:id', component: FormUserComponent },
    ],
  },
  //WildCards
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

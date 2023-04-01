import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './Pages/restricted/Dashboard/page-dashboard/page-dashboard.component';
import { PageGroupsComponent } from './Pages/restricted/Groups/page-groups/page-groups.component';
import { PageMachinesComponent } from './Pages/restricted/Machines/page-machines/page-machines.component';
import { PageJobsComponent } from './Pages/restricted/Jobs/page-jobs/page-jobs.component';
import { PageUsersComponent } from './Pages/restricted/Users/page-users/page-users.component';
import { PageLoginComponent } from './Pages/LogIn/page-login/page-login.component';

const routes: Routes = [
  //[Unrestricted]
  { path: 'login', component: PageLoginComponent },
  //[Restricted]
  //Admin
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'groups', component: PageGroupsComponent },
  { path: 'machines', component: PageMachinesComponent },
  { path: 'jobs', component: PageJobsComponent },
  { path: 'users', component: PageUsersComponent },
  { path: 'configs', component: PageUsersComponent },
  //WildCards
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

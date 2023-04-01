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
import { InputPathComponent } from './Components/input-path/input-path.component';
import { InputMultiselectComponent } from './Components/input-my/input-multiselect/input-multiselect.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CardLoginComponent } from './Pages/LogIn/card-login/card-login.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, CardLoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { ModuleService } from './module.service'
import { HomeService } from './home.service'
import { LogService } from './log.service'
import { SettingsService } from './settings.service'
import { UrlsService } from './urls.service'
import { ErrorService } from './error.service'

import { DashboardComponent } from './dashboard/dashboard.component';
import { WebUiComponent } from './webui/webui.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WebUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ModuleService,
    HomeService,
    LogService,
    SettingsService,
    UrlsService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarScheduleModule} from './calendar-schedule/calendar-schedule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

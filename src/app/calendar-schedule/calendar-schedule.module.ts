import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarScheduleComponent} from './calendar-schedule.component';

@NgModule({
    declarations: [
        CalendarScheduleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[CalendarScheduleComponent]
})
export class CalendarScheduleModule {
}

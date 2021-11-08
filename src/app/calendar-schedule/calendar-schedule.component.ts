import {Component, OnInit} from '@angular/core';
import {calendar} from './constantes';

@Component({
    selector: 'app-calendar-schedule',
    templateUrl: './calendar-schedule.component.html',
    styleUrls: ['./calendar-schedule.component.scss']
})
export class CalendarScheduleComponent implements OnInit {
    pludImg = calendar.plusImg;
    clockImg = calendar.clockImg;
    userImg = calendar.userImg;

    constructor() {
    }

    ngOnInit(): void {
    }

}

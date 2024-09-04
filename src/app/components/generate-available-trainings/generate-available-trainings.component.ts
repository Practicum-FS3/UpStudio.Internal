import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-generate-available-trainings',
  templateUrl: './generate-available-trainings.component.html',
  styleUrls: ['./generate-available-trainings.component.scss']
})
export class GenerateAvailableTrainingsComponent {
  rangeDates?: Date[];
  date1?:Date;
  date2?:Date;

  
  closeCalendarOnBlur(event: Event) {
    const calendarElement = document.querySelector('.p-calendar');

    if (event instanceof FocusEvent) {
        if (calendarElement && event.relatedTarget && !calendarElement.contains(event.relatedTarget as Node)) {
            (calendarElement as HTMLElement).classList.remove('p-calendar-visible');
        }
    } else {
        console.warn('Event is not of type FocusEvent');
    }
}


constructor(private messageService: MessageService) {}

onDateSelect(event: any) {
  if (this.rangeDates && this.rangeDates.length === 2) {
    const diffInTime = this.rangeDates[1].getTime() - this.rangeDates[0].getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    if (diffInDays > 30) {
      this.messageService.add({
        severity: 'warn',
        summary: 'בחירת תאריכים לא תקינה',
        detail: 'ניתן לבחור טווח של עד 30 ימים בלבד'
      });
      // איפוס הבחירה במקרה של חריגה
      this.rangeDates = [];
    }
  }
}

}



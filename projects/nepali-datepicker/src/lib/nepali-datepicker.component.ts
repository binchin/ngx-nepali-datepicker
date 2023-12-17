import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NepaliDatepickerService } from './nepali-datepicker.service';
import BikramSambat from '@askbuddie/bikram-sambat';

@Component({
  selector: 'lib-nepali-datepicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'nepali-datepicker.component.html',
  styleUrls: ['nepali-datepicker.component.scss'],
})
export class NepaliDatepickerComponent implements OnInit {
  datePicker = inject(NepaliDatepickerService);
  fulldates$ = this.datePicker.fullDate$;
  public startOfTheMonth!: BikramSambat;
  public endOfTheMonth!: BikramSambat;
  public startWeekDay!: number;
  listOfDates = [];

  onYearChange($event: any): void {
    const year = $event.target.value;
    this.datePicker.onYearChange(year);
  }

  ngOnInit() {
    this.fulldates$.subscribe((date) => {
      this.startOfTheMonth = date.startOfMonth();
      this.endOfTheMonth = date.endOfMonth();
      this.startWeekDay = date.getDayOfWeek();
    });
  }

  get allMonthDates(): number[] {
    return Array.from(
      { length: this.endOfTheMonth.getDay() - 1 + 1 },
      (_, index) => 1 + index
    );
  }

  private _createEmptySpace(): string[] {
    return Array.from({ length: 7 }, (_, i) =>
      ((this.startWeekDay + i) % 7).toString().padStart(2, '')
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { NepaliDatepickerService } from './nepali-datepicker.service';
import BikramSambat from '@askbuddie/bikram-sambat';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  takeUntil,
} from 'rxjs/operators';
import { listOfMonths, listOfYears } from './constants';
import { Month } from './nepali-datepicker.interface';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { ExtractDateNumberPipe } from './extract-date-number.pipe';
import { UtilityService } from './utility.service';

@Component({
  selector: 'lib-nepali-datepicker',
  standalone: true,
  imports: [CommonModule, FormsModule, ExtractDateNumberPipe],
  templateUrl: 'nepali-datepicker.component.html',
  styleUrls: ['nepali-datepicker.component.scss'],
})
export class NepaliDatepickerComponent implements OnInit {
  @Input() languagePreference: string = 'np';
  datePicker = inject(NepaliDatepickerService);
  utilityService = inject(UtilityService);
  years: number[] = listOfYears();
  months: Month[] = listOfMonths;
  currentMonth!: number;
  currentYear!: number;
  destroyed$ = new Subject();

  todaysDate$ = this.datePicker.todaysDate$.pipe(
    map((date) => date.toString())
  );

  currentMonth$ = this.datePicker.fullDate$.pipe(
    map((date) => {
      this.currentMonth = date.getMonth();
      return `${this.currentMonth}`;
    })
  );

  currentYear$ = this.datePicker.fullDate$.pipe(
    map((date) => {
      this.currentYear = date.getYear();
      return `${this.currentYear}`;
    })
  );

  currentMonthDates$ = this.datePicker.fullDate$.pipe(
    map(
      (date) =>
        this._getAllDatesInMonth(
          date.startOfMonth().getDayOfWeek(),
          date.endOfMonth().getDay()
        ),
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    ),
    distinctUntilChanged(),
    takeUntil(this.destroyed$)
  );

  public selectDate(): void {
    const newDate = new BikramSambat();
  }

  public onPreviousMonth(): void {
    this.datePicker.onPrevious();
  }

  public onNextMonth(): void {
    this.datePicker.onNext();
  }

  onYearChange(year: number): void {
    this.currentYear = year;
    this.datePicker.onYearChange(year);
  }

  onMonthChange(month: number): void {
    this.currentMonth = month;
    this.datePicker.onMonthChange(month);
  }

  ngOnInit() {}

  private _getAllDatesInMonth(startWeekDay: number, endOfMonth: number): any[] {
    let dates = [];
    for (let day = 1; day <= endOfMonth; day++) {
      this.currentMonth < 10
        ? dates.push(`${this.currentYear}-0${this.currentMonth}-${day}`)
        : dates.push(`${this.currentYear}-${this.currentMonth}-${day}`);
    }
    const emptySpaces = this._createEmptyPadding(startWeekDay);
    dates = [...emptySpaces, ...dates];
    return dates;
  }

  private _createEmptyPadding(startWeekDay: number): string[] {
    const emptySpaces: any = [];
    for (let space = 1; space <= startWeekDay; space++) {
      emptySpaces.push('');
    }
    return emptySpaces;
  }
}

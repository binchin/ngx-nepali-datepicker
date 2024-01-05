import { Injectable } from '@angular/core';
import BikramSambat from '@askbuddie/bikram-sambat';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NepaliDatepickerService {
  public currentDate = new BikramSambat();
  public day: number = this.currentDate.getDay();
  public month: number = this.currentDate.getMonth();
  public year: number = this.currentDate.getYear();
  public startOfTheMonth = this.currentDate.startOfMonth();
  public endOfTheMonth = this.currentDate.endOfMonth();
  public startWeekDay = this.startOfTheMonth.getDayOfWeek();

  fullDateSubject = new BehaviorSubject<BikramSambat>(this.currentDate);
  fullDate$ = this.fullDateSubject.asObservable();

  todaysDate$ = of(this.currentDate);

  constructor() {}

  onDateChange(date: BikramSambat): void {
    this.fullDateSubject.next(date);
  }

  onPrevious(): void {
    const date = this.fullDateSubject.value;
    let newMonth = date.getMonth() - 1;
    date.setMonth(newMonth);
    if (newMonth === 0) {
      date.setYear(date.getYear() - 1);
      date.setMonth(12);
    }
    this.fullDateSubject.next(date);
  }

  onNext(): void {
    let date = this.fullDateSubject.value;
    date = date.addMonths(1);
    this.fullDateSubject.next(date);
  }

  onYearChange(year: number): void {
    const date = this.fullDateSubject.value;
    date.setYear(year);
    this.fullDateSubject.next(date);
  }

  onMonthChange(month: number): void {
    const date = this.fullDateSubject.value;
    date.setMonth(month);
    this.fullDateSubject.next(date);
  }
}

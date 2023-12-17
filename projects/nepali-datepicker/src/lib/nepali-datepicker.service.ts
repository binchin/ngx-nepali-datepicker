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

  monthSubject = new BehaviorSubject<number>(this.month);
  monthSelectedAction$ = this.monthSubject.asObservable();

  yearSubject = new BehaviorSubject<number>(this.year);
  yearSelectedAction$ = this.yearSubject.asObservable();

  constructor() {}

  onMonthChange(month: number): void {
    const date: BikramSambat = new BikramSambat();
    date.setMonth(month);
    this.fullDateSubject.next(date);
    this.monthSubject.next(month);
  }

  onYearChange(year: number): void {
    const date: BikramSambat = new BikramSambat();
    date.setYear(year);
    console.log(date);
    this.fullDateSubject.next(date);
    this.yearSubject.next(year);
  }

  emitChange(date: BikramSambat): void {
    this.startOfTheMonth = date.startOfMonth();
    this.endOfTheMonth = date.endOfMonth();
    this.startWeekDay = this.startOfTheMonth.getDayOfWeek();
  }
}

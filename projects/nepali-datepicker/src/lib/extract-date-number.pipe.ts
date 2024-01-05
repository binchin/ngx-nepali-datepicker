import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractDateNumber',
  standalone: true,
})
export class ExtractDateNumberPipe implements PipeTransform {
  transform(value: string): unknown {
    const dateNumber = value.split('-')[2];
    return dateNumber;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number): string {
    let phone: string = value.toString();
    return `${phone.substring(0, 2)} (${phone.substring(2, 5)}) ${phone.substring(5, 8)} ${phone.substring(8, 10)} ${phone.substring(10)}`;

  }

}

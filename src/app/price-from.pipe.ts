import { Pipe, PipeTransform } from '@angular/core';
import { Wycieczka } from './wycieczka';

@Pipe({
  name: 'priceFrom'
})
export class PriceFromPipe implements PipeTransform {

  transform(tours: Wycieczka[], priceFrom: Number): Wycieczka[] {
    if (!priceFrom) {
      return tours;
    }

    return tours.filter(tour => tour.cenaJednostkowa >= priceFrom);
  }
}

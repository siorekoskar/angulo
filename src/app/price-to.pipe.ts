import { Pipe, PipeTransform } from '@angular/core';
import { Wycieczka } from '../wycieczka';

@Pipe({
  name: 'priceTo'
})
export class PriceToPipe implements PipeTransform {

  transform(tours: Wycieczka[], priceTo: Number): Wycieczka[] {
    if (!priceTo) {
      return tours;
    }

    return tours.filter(tour => tour.cenaJednostkowa <= priceTo);
  }
}

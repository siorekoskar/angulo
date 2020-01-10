import { Pipe, PipeTransform } from '@angular/core';
import { Wycieczka } from './wycieczka';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(tours: Wycieczka[], country: String): Wycieczka[] {
    if (!country || country === '') {
      return tours;
    }

    return tours.filter(tour => tour.docelowyKraj.toLowerCase().startsWith(country.toLowerCase()));
  }
}

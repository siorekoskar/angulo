import { Wycieczka } from './wycieczka';
import { TourDate } from './tour-date';

export interface BasketTour {
    reservedTours: number;
    tour: Wycieczka;
    basketId: string;
    tourDate: TourDate;
}

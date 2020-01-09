import { Injectable } from '@angular/core';
import { Wycieczka } from '../wycieczka';
import { BasketTour } from '../basket-tour';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  toursChosen: BasketTour[] = [];

  constructor() { }

  addTour(tour: BasketTour) {
    let r = Math.random().toString(36).substring(7);
    tour.basketId = r;
    this.toursChosen.push(tour);
  }

  getCostTotal() {
    return this.toursChosen.reduce((acc, obj) => {
      return acc + obj.tour.cenaJednostkowa * obj.reservedTours;
    }, 0);
  }

  getAmount() {
    return this.toursChosen.reduce((acc, obj) => {
      return acc + obj.reservedTours;
    }, 0);
  }

  removeTour(id: string) {
    this.toursChosen = this.toursChosen.filter(tour => tour.basketId !== id);
  }
}

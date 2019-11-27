import { Injectable } from '@angular/core';
import { Wycieczka } from '../wycieczka';
import { BasketTour } from '../basket-tour';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  toursChosen: BasketTour[] = [];

  constructor() { }

  addTour(tour: BasketTour){
    this.toursChosen.push(tour);
  }

  getCostTotal(){
    return this.toursChosen.reduce((acc, obj) => {
      return acc + obj.tour.cenaJednostkowa * obj.reservedTours;
    }, 0); 
  }

  getAmount() {
    return this.toursChosen.reduce((acc, obj) => {
      return acc + obj.reservedTours;
    }, 0);
  }
}

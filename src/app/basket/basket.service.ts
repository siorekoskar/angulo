import { Injectable } from '@angular/core';
import { Wycieczka } from '../wycieczka';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  toursChosen: Wycieczka[] = [];

  constructor() { }

  addTour(tour: Wycieczka){
    this.toursChosen.push(tour);
  }

  getCostTotal(){
    return this.toursChosen.reduce((acc, obj) => {
      return acc + obj.cenaJednostkowa;
    }, 0); 
  }

  getAmount() {
    return this.toursChosen.length;
  }
}

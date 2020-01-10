import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { TourDate } from '../tour-date';
import { Wycieczka } from '../wycieczka';

@Component({
  selector: 'tr[app-basket-tour-entry]',
  templateUrl: './basket-tour-entry.component.html',
  styleUrls: ['./basket-tour-entry.component.css']
})
export class BasketTourEntryComponent implements OnInit {

  @Input() tourDate: TourDate;
  @Input() reservedTours: number = 0;
  @Input() tour: Wycieczka;

  constructor(
    private basketService: BasketService) { }

  ngOnInit() {
  }

  plusButton() {
    if (this.reservedTours + this.tourDate.currRes < this.tourDate.maxRes) {
      this.reservedTours += 1;
    }
  }

  minusButton() {
    if (this.reservedTours > 0) {
      this.reservedTours -= 1;
    }
  }

  addTourToBasket() {
    let basketTour = {
      reservedTours: this.reservedTours,
      tourDate: this.tourDate,
      basketId: 'null',
      tour: this.tour
    };
    this.basketService.addTour(basketTour)
    this.reservedTours = 0;
  }
}

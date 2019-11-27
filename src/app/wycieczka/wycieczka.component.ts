import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { Wycieczka } from '../wycieczka';

@Component({
  selector: 'app-wycieczka',
  templateUrl: './wycieczka.component.html',
  styleUrls: ['./wycieczka.component.css']
})
export class WycieczkaComponent implements OnInit {

  @Input() wycieczka: Wycieczka;
  @Input() isCheapest: boolean;
  @Input() isMostExpensive: boolean;
  @Output() signaledRemoved = new EventEmitter<number>();
  @Output() tourAddedToBasket = new EventEmitter<{tour: Wycieczka, reservedTours: number}>();
  @Input() index: number;
  reservedTours: number = 0;

  constructor() { }

  plusButton() {
    if (this.isPlaceLeft()) {
      this.wycieczka.rezerwacje += 1;
      this.reservedTours += 1;
    }
  }

  minusButton() {
    if (this.isFull()) {
      this.wycieczka.rezerwacje -= 1;
      this.reservedTours -= 1;
    }
  }

  isPlaceLeft(){
    return this.wycieczka.maxIloscMiejsca - this.wycieczka.rezerwacje > 0
  }

  getWycieczka(){
    return this.wycieczka;
  }

  isFull() {
    return this.wycieczka.rezerwacje > 0;
  }

  getCena() {
    return this.wycieczka.cenaJednostkowa;
  }

  deleteTour(){
    this.signaledRemoved.emit(this.index);
  }

  addTourToBasket() {
    this.tourAddedToBasket.emit({tour: this.wycieczka, reservedTours: this.reservedTours});
    this.reservedTours = 0;
  }

  imageClicked() {
    return this.index;
  }

  ngOnInit() {
  }

}

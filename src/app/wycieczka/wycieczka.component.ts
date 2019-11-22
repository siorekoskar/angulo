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
  @Output() tourAddedToBasket = new EventEmitter<Wycieczka>();
  @Input() index: number;
  review = new ReviewComponent();

  constructor() { }

  plusButton() {
    if (this.isPlaceLeft()) {
      this.wycieczka.rezerwacje += 1;
    }
  }

  setReview(ocena: number) {
    this.review.review = ocena;
  }

  minusButton() {
    if (this.isFull()) {
      this.wycieczka.rezerwacje -= 1;
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
    this.tourAddedToBasket.emit(this.wycieczka);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { Wycieczka } from '../wycieczka';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-wycieczka',
  templateUrl: './wycieczka.component.html',
  styleUrls: ['./wycieczka.component.css']
})
export class WycieczkaComponent implements OnInit {

  @Input() wycieczka: Wycieczka;
  @Input() isCheapest: boolean;
  @Input() isMostExpensive: boolean;
  @Output() signaledRemoved = new EventEmitter<string>();
  @Output() tourAddedToBasket = new EventEmitter<{ tour: Wycieczka, reservedTours: number }>();
  @Input() index: string;
  reservedTours: number = 0;

  constructor(private usersService: UsersService) { }

  plusButton() {
  }

  minusButton() {
  }

  isPlaceLeft() {
  }

  getWycieczka() {
    return this.wycieczka;
  }

  isFull() {
  }

  getCena() {
    return this.wycieczka.cenaJednostkowa;
  }

  deleteTour() {
    this.signaledRemoved.emit(this.index);
  }

  addTourToBasket() {
    this.tourAddedToBasket.emit({ tour: this.wycieczka, reservedTours: this.reservedTours });
    this.reservedTours = 0;
  }

  imageClicked() {
    return this.index;
  }

  ngOnInit() {
  }

}

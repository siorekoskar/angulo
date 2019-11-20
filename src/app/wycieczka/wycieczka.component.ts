import { Component, OnInit, Input } from '@angular/core';
import { Wycieczka } from '../wycieczki/wycieczki.component';

@Component({
  selector: 'app-wycieczka',
  templateUrl: './wycieczka.component.html',
  styleUrls: ['./wycieczka.component.css']
})
export class WycieczkaComponent implements OnInit {

  @Input() wycieczka: Wycieczka;
  @Input() isCheapest: boolean;
  @Input() isMostExpensive: boolean;

  constructor() { }

  plusButton() {
    if (this.isPlaceLeft()) {
      this.wycieczka.rezerwacje += 1;
    }
  }

  minusButton() {
    if (this.isFull()) {
      this.wycieczka.rezerwacje -= 1;
    }
  }

  isPlaceLeft(){
    return this.wycieczka.maxIloscMiejsca - this.wycieczka.rezerwacje > 0
  }

  isFull() {
    return this.wycieczka.rezerwacje > 0;
  }

  getCena() {
    return this.wycieczka.cenaJednostkowa;
  }


  ngOnInit() {
  }

}

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
      console.log('dupa2');
      this.wycieczka.rezerwacje += 1;
      console.log(this.wycieczka.rezerwacje);
    }
    console.log('dupa');
  }

  minusButton() {
    if (this.isFull()) {
      this.wycieczka.rezerwacje -= 1;
    }
  }

  isPlaceLeft(){
    console.log(this.wycieczka.maxIloscMiejsca - this.wycieczka.rezerwacje > 0)
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

  ngOnInit() {
  }

}

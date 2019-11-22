import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],

})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  getCostTotal() {
    return this.basketService.getCostTotal();
  }

  getAmount() {
    return this.basketService.getAmount();
  }
}

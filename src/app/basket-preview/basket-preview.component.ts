import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Wycieczka } from '../wycieczka';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  tours: Wycieczka[];

  constructor(private basketService: BasketService) { 
  }

  ngOnInit() {
    this.tours = this.basketService.toursChosen.map(tour => tour.tour);
  }

}

import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Wycieczka } from '../wycieczka';
import { BasketTour } from '../basket-tour';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  tours: BasketTour[];

  constructor(private basketService: BasketService) { 
  }

  getTours(): BasketTour[] {
    return this.tours;
  }

  ngOnInit() {
    this.tours = this.basketService.toursChosen;
  }

  deleteTour(tourId: string){
    this.basketService.removeTour(tourId);
    this.tours = this.basketService.toursChosen;
  }
}

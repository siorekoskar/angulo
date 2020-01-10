import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Wycieczka } from '../wycieczka';
import { BasketTour } from '../basket-tour';
import { ToursService } from '../wycieczki/tours.service';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  tours: BasketTour[];

  constructor(private basketService: BasketService, private toursService: ToursService) {
  }

  getTours(): BasketTour[] {
    return this.tours;
  }

  ngOnInit() {
    this.tours = this.basketService.toursChosen;
  }

  deleteTour(tourId: string) {
    this.basketService.removeTour(tourId);
    this.tours = this.basketService.toursChosen;
  }

  pay() {
    this.toursService.pay(this.tours).then(_ => {
      // alert(`Bought`);
      this.tours = [];
      this.basketService.toursChosen = [];
    })
  }
}

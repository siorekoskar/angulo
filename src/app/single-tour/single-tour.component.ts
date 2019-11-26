import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { BasketService } from '../basket/basket.service';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.css']
})
export class SingleTourComponent implements OnInit {

  index: number;
  tour: Wycieczka;
  isInBasket: boolean = false;
  review = new ReviewComponent();

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private basketService: BasketService) { }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("id"));
    this.toursService.getProduct(this.index).then(tour => {
      this.tour = tour;
    });
    // this.isInBasket = this.basketService.toursChosen.includes(this.tour);
  }

  setReview(ocena: number) {
    this.review.review = ocena;
  }
}

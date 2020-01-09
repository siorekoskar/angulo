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

  index: string;
  tour: Wycieczka;
  isInBasket: boolean;
  review = new ReviewComponent();
  userRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private basketService: BasketService) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get("id");
    this.toursService.getProduct(this.index).then(tour => {
      this.tour = tour;
      this.isInBasket = this.basketService.toursChosen.some(tour => tour.tour.id === this.index);
    });
  }

  setReview(ocena: number) {
    this.review.review = ocena;
  }

  tourRated(rating: number) {
    this.userRating = rating;
  }
}

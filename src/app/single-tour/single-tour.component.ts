import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { BasketService } from '../basket/basket.service';
import { ReviewComponent } from '../review/review.component';
import { TourDate } from '../tour-date';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.css']
})
export class SingleTourComponent implements OnInit {

  index: string;
  tour: Wycieczka;
  tourDates: TourDate[];
  isInBasket: boolean;
  review = new ReviewComponent();
  tourDatesMap = {};
  userRating: number = 0;
  userDidBuy: boolean;
  didNotRate: boolean;

  @Output() tourAddedToBasket = new EventEmitter<{ tourDate: TourDate, reservedTours: number }>();

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private basketService: BasketService,
    private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get("id");
    this.toursService.getProduct(this.index).then(tour => {
      this.tour = tour;
      this.isInBasket = this.basketService.toursChosen.some(tour => tour.tour.id === this.index);
      this.didNotRate = tour.usersRated.filter(user => user === this.fireAuth.auth.currentUser.email).length === 0;
      this.userDidBuy = tour.usersBought.filter(user => user === this.fireAuth.auth.currentUser.email).length !== 0;
      this.toursService.getTourDatesForProduct(tour).then(tourDates => {
        this.tourDates = tourDates
      });
    });
  }

  getRating() {
    let d = this.tour.fiveStars + this.tour.fourStars + this.tour.threeStars + this.tour.twoStars + this.tour.oneStar as number;
    return (this.tour.fiveStars * 5 + this.tour.fourStars * 4 + this.tour.threeStars * 3 + this.tour.twoStars * 2 + this.tour.oneStar)
      / (d);
  }

  setReview(ocena: number) {
    this.review.review = ocena;
  }

  tourRated(rating: number) {
    this.userRating = rating;
    this.didNotRate = false;
    if (rating === 1) {
      this.tour.oneStar += 1;
    } else if (rating === 2) {
      this.tour.twoStars += 1;
    } else if (rating === 3) {
      this.tour.threeStars += 1;
    } else if (rating === 4) {
      this.tour.fourStars += 1;
    } else if (rating === 5) {
      this.tour.fiveStars += 1;
    }
  }


  addTourToBasket(tourId) {
    let basketTour = {
      reservedTours: this.tourDatesMap[tourId].res,
      tourDate: this.tourDatesMap[tourId].tourDate,
      basketId: 'null',
      tour: this.tour
    };
    this.basketService.addTour(basketTour)
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { BasketService } from '../basket/basket.service';
import { ReviewComponent } from '../review/review.component';
import { TourDate } from '../tour-date';

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
  @Output() tourAddedToBasket = new EventEmitter<{ tourDate: TourDate, reservedTours: number }>();

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private basketService: BasketService) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get("id");
    this.toursService.getProduct(this.index).then(tour => {
      this.tour = tour;
      this.isInBasket = this.basketService.toursChosen.some(tour => tour.tour.id === this.index);
      this.toursService.getTourDatesForProduct(tour).then(tourDates => {
        this.tourDates = tourDates
        tourDates.map(tourDate => {
          this.tourDatesMap[tourDate.id] = { tourDate: tourDate, res: 0 };
        })
      });
    });
  }

  setReview(ocena: number) {
    this.review.review = ocena;
  }

  tourRated(rating: number) {
    this.userRating = rating;
  }

  bookTour(id: number) {

  }

  plusButton(tourId) {
    this.tourDatesMap[tourId].res += 1;
  }

  minusButton(tourId) {
    this.tourDatesMap[tourId].res -= 1;
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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.rated.emit($event.newValue);
  }
}

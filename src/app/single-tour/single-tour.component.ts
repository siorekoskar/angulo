import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.css']
})
export class SingleTourComponent implements OnInit {

  index: number;
  tour: Wycieczka;

  constructor(
    private route: ActivatedRoute, 
    private toursService: ToursService) { }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("id"));
    this.tour = this.toursService.getProduct(this.index);
  }

}

import { Component, OnInit } from '@angular/core';
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-tours',
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.css']
})
export class AdminToursComponent implements OnInit {

  tours: Wycieczka[];
  update = new BehaviorSubject<boolean>(false);

  refreshTours() {
    this.toursService.getProducts().subscribe(
      tours => this.tours = tours
    );
  }

  constructor(private toursService: ToursService) { }

  ngOnInit() {
    this.toursService.getProducts().subscribe(
      tours => this.tours = tours
    );
    this.update.subscribe(update => update === true ? this.refreshTours() : '');
  }

  deleteTour(index: string) {
    this.toursService.deleteProduct(index).then(() => {
      this.update.next(true);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { TourDate } from '../tour-date';

@Component({
  selector: 'app-new-tour-date',
  templateUrl: './new-tour-date.component.html',
  styleUrls: ['./new-tour-date.component.css']
})
export class NewTourDateComponent implements OnInit {

  modelForm: FormGroup;
  index: string;
  tour: Wycieczka;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private toursService: ToursService,
    private router: Router) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get("id");
    this.toursService.getProduct(this.index).then(
      tour => this.tour = tour
    );
    this.modelForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      currRes: [0],
      maxRes: [0]
    });
  }

  onSubmit() {
    let startDate = this.modelForm.get('startDate').value;
    let startSplit = startDate.split("/");
    let endDate = this.modelForm.get('endDate').value;
    let endSplit = endDate.split("/");
    let stDate = new Date(startDate);
    let eDate = new Date(endDate);
    this.modelForm.setValue({
      startDate: stDate,
      endDate: eDate,
      currRes: 0,
      maxRes: this.modelForm.get('maxRes').value
    })

    let r = Math.random().toString(36).substring(7);
    this.db.collection("tourdates").doc(r)
      .set(
        this.modelForm.value
      ).then(res => {
        let tourDates = this.tour.tourDates as any
        if (!tourDates) {
          tourDates = [];
        }

        tourDates.push(this.db.doc("tourdates/" + r).ref);
        let tourDates2 = tourDates as TourDate[];
        this.tour.tourDates = tourDates2;
        this.toursService.updateProduct(this.index, this.tour)
          .then(res => {
            console.log("done");
            this.router.navigate(['/tours']);
          })
      });
  }

}

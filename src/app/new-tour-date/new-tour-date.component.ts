import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-tour-date',
  templateUrl: './new-tour-date.component.html',
  styleUrls: ['./new-tour-date.component.css']
})
export class NewTourDateComponent implements OnInit {

  modelForm: FormGroup;
  index: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get("id");
    this.modelForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      curRes: [0],
      maxRes: [0]
    });
  }

}

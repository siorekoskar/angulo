import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  modelForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toursService: ToursService) { }

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      nazwa: '',
      docelowyKraj: '',
      dataRozpoczecia: '',
      dataZakonczenia: '',
      maxIloscMiejsca: '',
      opisWycieczki: '',
      link: '',
      rezerwacje: '',
      waluta: '',
      photos: []
    });
  }

  onSubmit(): void {
    console.log(this.modelForm.value);
    this.toursService.addProduct(this.modelForm.value).then(result => {
    })
    this.modelForm.reset();
  };

}

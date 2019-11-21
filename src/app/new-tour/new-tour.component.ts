import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToursService } from '../wycieczki/tours.service';

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
      waluta: ''
    });
  }

  onSubmit(): void {
    this.toursService.addProduct(this.modelForm.value);
    this.modelForm.reset();
  };

}

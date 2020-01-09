import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToursService } from '../wycieczki/tours.service';
import { Wycieczka } from '../wycieczka';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  modelForm: FormGroup;

  isEdit: boolean = false;
  index: string;

  nazwa: '';
  docelowyKraj: '';
  dataRozpoczecia: '';
  dataZakonczenia: '';
  maxIloscMiejsca: '';
  opisWycieczki: '';
  link: '';
  rezerwacje: '';
  waluta: '';
  cenaJednostkowa: 0;
  photos: [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toursService: ToursService,
    private db: AngularFirestore,
    private router: Router) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get("id");
    this.modelForm = this.formBuilder.group({
      nazwa: this.nazwa,
      docelowyKraj: this.docelowyKraj,
      dataRozpoczecia: this.dataRozpoczecia,
      dataZakonczenia: this.dataZakonczenia,
      maxIloscMiejsca: this.maxIloscMiejsca,
      opisWycieczki: this.opisWycieczki,
      link: this.link,
      rezerwacje: this.rezerwacje,
      waluta: this.waluta,
      photos: this.photos,
      cenaJednostkowa: this.cenaJednostkowa
    });
    if (this.index !== null) {
      this.isEdit = true;
      this.toursService.getProduct(this.index).then(tour => {
        this.modelForm.setValue({
          nazwa: tour.nazwa,
          docelowyKraj: tour.docelowyKraj,
          dataRozpoczecia: tour.dataRozpoczecia,
          dataZakonczenia: tour.dataZakonczenia,
          maxIloscMiejsca: tour.maxIloscMiejsca,
          opisWycieczki: tour.opisWycieczki,
          link: tour.link,
          rezerwacje: tour.rezerwacje,
          waluta: tour.waluta,
          photos: tour.photos,
          cenaJednostkowa: tour.cenaJednostkowa !== null ? tour.cenaJednostkowa : 0
        });
      });
    }
  }

  onSubmit(): void {
    console.log(this.modelForm.value);
    if (this.isEdit) {
      this.toursService.updateProduct(this.index, this.modelForm.value).then(
        res => {
          this.router.navigate(['/admin/tours']);
        },
        err => {
          console.log(err);
        });
    } else {
      this.toursService.addProduct(this.modelForm.value).then(result => {
      })
      this.modelForm.reset();
    }
  };

}

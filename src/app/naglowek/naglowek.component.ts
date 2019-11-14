import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.css']
})
export class NaglowekComponent implements OnInit {
  nazwaBiura: string = "Biuro pielgrzymki";
  adres: string = "ul Paderewskiego 20";
  baner: string = "https://drukoma.pl/environment/cache/images/500_500_productGfx_1328/Baner-reklamowy-szablon-Uslugi-rachunkowe-BAN-08-Copy.jpg"

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { WycieczkaComponent } from '../wycieczka/wycieczka.component';

@Component({
  selector: 'app-wycieczki',
  templateUrl: './wycieczki.component.html',
  styleUrls: ['./wycieczki.component.css']
})
export class WycieczkiComponent implements OnInit {

  wycieczki: WycieczkaComponent[];
  cheapestIndex: number;
  expensiveIndex: number;

  cheapestIndexF() {
    let oldInd = 0;
    this.wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.getCena() < curr.getCena() ? prev : curr
      oldInd = prev.getCena() < curr.getCena() ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  expensiveIndexF() {
    let oldInd = 0;
    this.wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.getCena() > curr.getCena() ? prev : curr
      oldInd = prev.getCena() > curr.getCena() ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  constructor() { }

  ngOnInit() {
  }

  generateWycieczki() {
    return [
      {
        nazwa: "Wycieczka1",
        docelowyKraj: "Niemcy",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 50,
        maxIloscMiejsca: 5,
        opisWycieczki: "Mega dobra wycieczka",
        rezerwacje: 0,
        link: "http://tutorialspark.com/AngularJS/Angular.png",
        waluta: 'EUR'
      },
      {
        nazwa: "Wycieczka2",
        docelowyKraj: "Hiszpania",
        dataRozpoczecia: "jutro",
        dataZakonczenia: "pojutrze",
        cenaJednostkowa: 53,
        maxIloscMiejsca: 2,
        opisWycieczki: "Mega słaba wycieczka",
        rezerwacje: 0,
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'PLN'
      },
      {
        nazwa: "Wycieczka3",
        docelowyKraj: "Anglia",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 12,
        maxIloscMiejsca: 27,
        opisWycieczki: "Mega dziwna wycieczka",
        rezerwacje: 0,
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'USD'
      }
      ,
      {
        nazwa: "Wycieczka4",
        docelowyKraj: "Anglia",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 12,
        maxIloscMiejsca: 27,
        opisWycieczki: "Mega dziwna wycieczka",
        rezerwacje: 11,
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'PLN'
      }
    ]
  }

}

export interface Wycieczka {
  nazwa: string;
  docelowyKraj: string;
  dataRozpoczecia: string;
  dataZakonczenia: string;
  cenaJednostkowa: number;
  maxIloscMiejsca: number;
  opisWycieczki: string;
  link: string;
  rezerwacje: number;
  waluta: string;
}

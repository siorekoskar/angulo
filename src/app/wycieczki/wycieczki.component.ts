import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wycieczki',
  templateUrl: './wycieczki.component.html',
  styleUrls: ['./wycieczki.component.css']
})
export class WycieczkiComponent implements OnInit {

  wycieczki: Wycieczka[] = generateWycieczki();
  cheapestIndex: number = this.cheapestIndexF();
  expensiveIndex: number = this.expensiveIndexF();

  cheapestIndexF() {
    let oldInd = 0;
    this.wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.cenaJednostkowa < curr.cenaJednostkowa ? prev : curr
      oldInd = prev.cenaJednostkowa < curr.cenaJednostkowa ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  expensiveIndexF() {
    let oldInd = 0;
    this.wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.cenaJednostkowa > curr.cenaJednostkowa ? prev : curr
      oldInd = prev.cenaJednostkowa > curr.cenaJednostkowa ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  constructor() { }

  plusButton(i: number) {
    if (this.wycieczki[i].maxIloscMiejsca - this.wycieczki[i].rezerwacje > 0) {
      this.wycieczki[i].rezerwacje += 1;
    }
  }

  minusButton(i: number) {
    if (this.wycieczki[i].rezerwacje > 0) {
      this.wycieczki[i].rezerwacje -= 1;
    }
  }

  ngOnInit() {
  }

}

function generateWycieczki() {
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

interface Wycieczka {
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

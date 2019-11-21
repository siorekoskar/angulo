import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { WycieczkaComponent } from '../wycieczka/wycieczka.component';
import { ChangeDetectorRef } from '@angular/core';
import { Wycieczka, WYCIECZKI } from '../wycieczka';
import { ToursService } from './tours.service';


@Component({
  selector: 'app-wycieczki',
  templateUrl: './wycieczki.component.html',
  styleUrls: ['./wycieczki.component.css']
})
export class WycieczkiComponent implements OnInit {

  @ViewChildren(WycieczkaComponent) wycieczki: QueryList<WycieczkaComponent>;
  cheapestIndex: number;
  expensiveIndex: number;

  constructor(
    private cdRef: ChangeDetectorRef,
    private toursService: ToursService) {
    this.cdRef = cdRef;
  }

  ngOnInit() {
    this.toursService.getProducts()
  }

  getWycieczki() {
    return this.toursService.getProducts();
  }

  getProducts() {

  }

  cheapestIndexF(wycieczki: WycieczkaComponent[]) {
    let oldInd = 0;
    wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.getCena() < curr.getCena() ? prev : curr
      oldInd = prev.getCena() < curr.getCena() ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  expensiveIndexF(wycieczki: WycieczkaComponent[]) {
    let oldInd = 0;
    wycieczki.reduce((prev, curr, ind) => {
      let wycieczka = prev.getCena() > curr.getCena() ? prev : curr
      oldInd = prev.getCena() > curr.getCena() ? oldInd : ind;
      return wycieczka;
    })
    return oldInd;
  }

  tourRemoved(index: number) {
    // let index = this.tours.indexOf(wycieczka);
    this.toursService.deleteProduct(index);
  }


  ngAfterViewInit() {
    let wycieczki = this.wycieczki.toArray();
    let expI = this.expensiveIndexF(wycieczki);
    let cheapI = this.cheapestIndexF(wycieczki);
    wycieczki[expI].isMostExpensive = true;
    wycieczki[cheapI].isCheapest = true;
    this.cdRef.detectChanges();
  }

}
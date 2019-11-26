import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { WycieczkaComponent } from '../wycieczka/wycieczka.component';
import { ChangeDetectorRef } from '@angular/core';
import { ToursService } from './tours.service';
import { Wycieczka } from '../wycieczka';
import { BasketService } from '../basket/basket.service';


@Component({
  selector: 'app-wycieczki',
  templateUrl: './wycieczki.component.html',
  styleUrls: ['./wycieczki.component.css']
})
export class WycieczkiComponent implements OnInit {

  tours: Wycieczka[];

  @ViewChildren(WycieczkaComponent) wycieczki: QueryList<WycieczkaComponent>;
  cheapestIndex: number;
  expensiveIndex: number;

  constructor(
    private cdRef: ChangeDetectorRef,
    private toursService: ToursService,
    private basketService: BasketService) {
    this.cdRef = cdRef;
  }

  ngOnInit() {
    this.toursService.getProducts().subscribe(
      tours => this.tours = tours
    );
  }

  getWycieczki() {
    return this.toursService.getProducts();
  }

  getProducts() {

  }

  cheapestIndexF(wycieczki: WycieczkaComponent[]) {
    // let oldInd = 0;
    // wycieczki.reduce((prev, curr, ind) => {
    //   let wycieczka = prev.getCena() < curr.getCena() ? prev : curr
    //   oldInd = prev.getCena() < curr.getCena() ? oldInd : ind;
    //   return wycieczka;
    // })
    // return oldInd;
    return 1;
  }

  expensiveIndexF(wycieczki: WycieczkaComponent[]) {
    // let oldInd = 0;
    // wycieczki.reduce((prev, curr, ind) => {
    //   let wycieczka = prev.getCena() > curr.getCena() ? prev : curr
    //   oldInd = prev.getCena() > curr.getCena() ? oldInd : ind;
    //   return wycieczka;
    // })
    // return oldInd;
    return 2;
  }

  tourRemoved(index: number) {
    this.toursService.deleteProduct(index);
  }

  tourAddedToBasket(tour: Wycieczka) {
    this.basketService.addTour(tour);
  }


  ngAfterViewInit() {
    // let wycieczki = this.wycieczki.toArray();
    // let expI = this.expensiveIndexF(wycieczki);
    // let cheapI = this.cheapestIndexF(wycieczki);
    // wycieczki[expI].isMostExpensive = true;
    // wycieczki[cheapI].isCheapest = true;
    // this.cdRef.detectChanges();
  }

}
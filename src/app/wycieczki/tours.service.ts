import { Injectable } from '@angular/core';
import { WYCIECZKI, Wycieczka } from '../wycieczka';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  tours: Wycieczka[] = WYCIECZKI;

  constructor() { }
  getProducts() { return this.tours; };
  getProduct(index: number) { return this.tours[index]; };
  addProduct() { };
  deleteProduct(index: number) { this.tours.splice(index, 1); };
}

import { Injectable } from '@angular/core';
import { WYCIECZKI, Wycieczka } from '../wycieczka';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursApiUrl = 'api/tours';

  tours: Wycieczka[] = WYCIECZKI;

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Wycieczka[]> {
    return this.http.get<Wycieczka[]>(this.toursApiUrl).pipe(map(response => response.data));
  };
  getProduct(index: number): Promise<Wycieczka> {
    return this.http.get<Wycieczka>(`${this.toursApiUrl}/${index}`).toPromise().then(response => response.data);
  };

  addProduct(tour: Wycieczka): Observable<Wycieczka> {
    return this.http.post<Wycieczka>(this.toursApiUrl, tour);
  };
  deleteProduct(index: number): Observable<Wycieczka> {
    return this.http.delete<Wycieczka>(`${this.toursApiUrl}/${index}`);
    // this.tours.splice(index, 1);
  };
}

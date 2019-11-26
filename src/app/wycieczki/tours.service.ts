import { Injectable } from '@angular/core';
import { WYCIECZKI, Wycieczka } from '../wycieczka';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursApiUrl = 'api/tours';

  tours: Wycieczka[] = WYCIECZKI;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Wycieczka[]> {
    return this.http.get<Wycieczka[]>(this.toursApiUrl).pipe(map((response: any) => response.data));
  };

  getProduct(index: number): Promise<Wycieczka> {
    return this.http.get<Wycieczka>(`${this.toursApiUrl}/${index}`).toPromise().then((response: any) => response.data);
  };

  addProduct(tour: Wycieczka): Promise<Wycieczka> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Wycieczka>(this.toursApiUrl, tour, httpOptions).toPromise().then((response: any) => response.data);
  };

  deleteProduct(tour: Wycieczka | number): Observable<Wycieczka> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof tour === 'number' ? tour : tour.id;
    return this.http.delete<Wycieczka>(`${this.toursApiUrl}/${id}`, httpOptions);
    // this.tours.splice(index, 1);
  };
}

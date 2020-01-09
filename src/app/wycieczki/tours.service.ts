import { Injectable } from '@angular/core';
// import { WYCIECZKI, Wycieczka } from '../wycieczka';
import { Wycieczka } from '../wycieczka';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { TourDate } from '../tour-date';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursApiUrl = '/tours';

  tours: Wycieczka[] = [];//WYCIECZKI;

  public data: Observable<any[]>;
  constructor(
    private http: HttpClient,
    private db: AngularFirestore) {
  }

  ngOnInit() {
    // this.data = this.db.list('/tours');
  }
  // odczyt danych z bazy
  // public getdata(listPath): Observable<any[]> {
  //   return this.db.list(listPath);
  // }

  getProducts(): Observable<any[]> {

    let documentToDomainObject = _ => {
      const object = _.payload.doc.data();
      object.id = _.payload.doc.id;
      let tourDates = object.tourDates;
      object.tourDates = [];
      if (tourDates) {
        tourDates.forEach(tourDate => {
          this.db.collection('/tourdates').doc(tourDate.id).get().toPromise().then(
            (response: any) => {
              let tourDate = response.data();
              tourDate.id = response.id;
              object.tourDates.push(tourDate);
            }
          )
        })
      }
      return object;
    }

    return this.db.collection('/tours').snapshotChanges().pipe(
      map(a => a.map(documentToDomainObject))
    )
  };

  getProduct(index: string): Promise<Wycieczka> {
    return this.db.collection('/tours').doc(index).get().toPromise().then(
      (response: any) => {
        const object = response.data();
        object.id = response.id;
        // let tourDates = object.tourDates;
        // object.tourDates = [];
        // if (tourDates) {
        //   tourDates.forEach(tourDate => {
        //     this.db.collection('/tourdates').doc(tourDate.id).get().toPromise().then(
        //       (response: any) =>{
        //         let tourDate = response.data();
        //         tourDate.id = response.id;
        //         object.tourDates.push(tourDate);
        //       }
        //     )
        //   })
        // }
        return response.data();
      }
    );
  };

  getTourDatesForProduct(tour: Wycieczka): Promise<TourDate[]> {
    var promises = tour.tourDates.map(tourDate => {
      return this.db.collection('/tourdates').doc(tourDate.id).get().toPromise().then(
        (response: any) => {
          let tourDate = response.data();
          tourDate.id = response.id;
          return tourDate;
        }
      )
    });
    return Promise.all(promises).then(function(results) {
      return results;
  });
  }

  updateProduct(id: string, tour: Wycieczka): Promise<void> {
    return this.db.collection('/tours').doc(id).update(tour);
  }

  addProduct(tour: Wycieczka): Promise<Wycieczka> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.db.collection('/tours').add(tour).then((response: any) => response.data);
  };

  deleteProduct(index: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // const id = typeof tour === 'number' ? tour : tour.id;
    return this.db.collection('/tours').doc(index).delete();
  };
}

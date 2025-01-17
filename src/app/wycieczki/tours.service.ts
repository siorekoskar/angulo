import { Injectable } from '@angular/core';
import { Wycieczka } from '../wycieczka';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { TourDate } from '../tour-date';
import { BasketTour } from '../basket-tour';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserHistory } from '../user-history';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursApiUrl = '/tours';

  tours: Wycieczka[] = [];

  public data: Observable<any[]>;
  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    private fireAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

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
        return object;
      }
    );
  };

  getTourDatesForProduct(tour: Wycieczka): Promise<TourDate[]> {
    var promises = tour.tourDates.map(tourDate => {
      return this.db.collection('/tourdates').doc(tourDate.id).get().toPromise().then(
        (response: any) => {
          let tourDate = response.data();
          tourDate.id = response.id;
          tourDate.startDate = new Date((tourDate.startDate as any).seconds * 1000)
          tourDate.endDate = new Date((tourDate.endDate as any).seconds * 1000)
          return tourDate;
        }
      )
    });
    return Promise.all(promises).then(function (results) {
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
    return this.db.collection('/tours').doc(index).delete();
  };

  history: History;

  pay(basketTours: BasketTour[]): Promise<any> {
    let promises = basketTours.map(basketTour => {
      let tourDateId = basketTour.tourDate.id;
      let newTourAvailability = basketTour.reservedTours + basketTour.tourDate.currRes;
      if (!basketTour.tour.usersBought) {
        basketTour.tour.usersBought = [];
      } 
      
      if (basketTour.tour.usersBought.filter(username => username === this.fireAuth.auth.currentUser.email).length === 0) {
        basketTour.tour.usersBought.push(this.fireAuth.auth.currentUser.email);
      }
  
      this.updateProduct(basketTour.tour.id, basketTour.tour).then(res => {
        console.log("paid");
      })
      this.db.collection('/tourdates').doc(tourDateId)
        .update({ currRes: newTourAvailability })
        .then(result => {
          // this.getHistoryOfUser().subscribe(
          //   history => {
          //     let hist = history as UserHistory
          //     hist.tourDatesBought.push({ tourDateId: tourDateId, amount: basketTour.reservedTours });
          //     this.db.collection('/history').doc(hist.id).update({ tourDatesBought: hist.tourDatesBought })
          //       .then(d => { console.log("udalo sie") });
          //   }
          // );
        }
        );
    });
    return Promise.all(promises);
  }

  historyGet() {

  }

  getHistoryOfUser(): Observable<any> {
    let docToObj = _ => {
      const object = _[0].payload.doc.data();
      object.id = _[0].payload.doc.id;
      return object;
    }

    return this.db.collection('/history'
      , ref => {
        return ref.where('username', '==', this.fireAuth.auth.currentUser.email)
      }).snapshotChanges().pipe(map(docToObj));
  }
}

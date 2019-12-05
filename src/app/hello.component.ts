import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  // public data: FirebaseListObservable<any[]>;
  // constructor(private db: AngularFireDatabase) { }
  // ngOnInit() {
  //   this.data = this.db.list('/test');
  // }
  // // odczyt danych z bazy
  // public getdata(listPath): Observable<any[]> {
  //   return this.db.list(listPath);
  // }

}


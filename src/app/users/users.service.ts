import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = '/users';

  public data: Observable<any[]>;
  constructor(
    private db: AngularFirestore) {
  }

  ngOnInit() {

  }

}

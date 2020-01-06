import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth"; import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ username, password }: Credentials) {
    const session = firebase.auth.Auth.Persistence.SESSION;
    return this.fireAuth.auth.setPersistence(session).then(() => {
      return this.fireAuth.auth.signInWithEmailAndPassword(username, password);
    });
  }

  register({ username, password }: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(username, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

}

import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private usersUrl = '/users';

    public data: Observable<any[]>;
    constructor(
        private firestore: AngularFirestore,
        private authService: AuthService) {
    }

    isAdmin: boolean

    ngOnInit() {
        this.checkIsAdmin();
    }

    checkIsAdmin() {
        this.authService.authState$.pipe(map(state => {
            if (state !== null) {
                this.firestore.doc('permissions/' + state.email)
                    .get()
                    .subscribe(value => this.isAdmin = value.get("role") === "ADMIN");
            }
            this.isAdmin = false;
        }
        )
        ).subscribe(value => value);
    }

    isAdminFunction(){
        this.checkIsAdmin();
        return this.isAdmin;
    }
}

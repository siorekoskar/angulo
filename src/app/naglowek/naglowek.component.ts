import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.css']
})
export class NaglowekComponent implements OnInit {
  nazwaBiura: string = "Biuro pielgrzymki";
  adres: string = "ul Paderewskiego 20";
  baner: string = "https://drukoma.pl/environment/cache/images/500_500_productGfx_1328/Baner-reklamowy-szablon-Uslugi-rachunkowe-BAN-08-Copy.jpg"

  ngOnInit() {
    this.usersService.checkIsAdmin();
  }

  isAdmin: boolean;
  
  constructor(private authService: AuthService,
              private firestore: AngularFirestore,
              private usersService: UsersService) {}
}

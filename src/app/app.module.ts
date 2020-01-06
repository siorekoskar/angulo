import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WycieczkiComponent } from './wycieczki/wycieczki.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { WycieczkaComponent } from './wycieczka/wycieczka.component';
import { ReviewComponent } from './review/review.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { BasketComponent } from './basket/basket.component';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { BasketElementComponent } from './basket-element/basket-element.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { LoginComponent } from './login/login.component';
import { InMemoryToursDataService } from './in-memory-data/in-memory-tours-data.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"; import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    HelloComponent,
    WycieczkiComponent,
    NaglowekComponent,
    WycieczkaComponent,
    ReviewComponent,
    NewTourComponent,
    BasketComponent,
    BasketPreviewComponent,
    BasketElementComponent,
    SingleTourComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    SiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryToursDataService, { dataEncapsulation: true }
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class HelloModule { }

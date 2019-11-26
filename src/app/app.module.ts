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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryToursDataService, { dataEncapsulation: true }
    )
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class HelloModule { }

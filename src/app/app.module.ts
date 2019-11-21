import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { WycieczkiComponent } from './wycieczki/wycieczki.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { WycieczkaComponent } from './wycieczka/wycieczka.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    HelloComponent,
    WycieczkiComponent,
    NaglowekComponent,
    WycieczkaComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [WycieczkiComponent]
})
export class HelloModule { }

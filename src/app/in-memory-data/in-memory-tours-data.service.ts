import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { WYCIECZKI } from '../wycieczka';

@Injectable({
  providedIn: 'root'
})
export class InMemoryToursDataService implements InMemoryDbService {

  createDb() {
    const tours = []//WYCIECZKI;
    return {tours};
  }
}

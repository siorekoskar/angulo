import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title = 'projekt';
  imie = 'Jan';
  nazwisko = 'Kowalski';
  field: string = "";
  fieldout: string = this.tabliczka(['czesc','elo'], [1,2,3]);

  tabliczka(arr1: string[], arr2: number[]): string {
    let fieldout = "";
    for (let entry of arr1) {
      for (let i in arr2){
        fieldout += entry + arr2[i];   
      }
      fieldout += "\n";
    }
    return fieldout;
  }
  
}

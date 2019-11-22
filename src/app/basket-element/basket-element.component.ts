import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket-element',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.css']
})
export class BasketElementComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

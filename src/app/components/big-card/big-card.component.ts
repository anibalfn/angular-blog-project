import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  cardTitle: string = 'HELLO, I AM ANÍBAL F';
  cardDescription: string = '';

  constructor() {

  }
  ngOnInit(): void {
  }

}

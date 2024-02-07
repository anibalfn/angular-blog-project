import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  photoCover: string = 'https://avatars.githubusercontent.com/u/78622296?v=4';
  cardTitle: string = 'TITLE';
  smallCardDescription: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in sollicitudin ex. Praesent in felis consequat, hendrerit lorem id, fringilla tellus.`
  ngOnInit(): void {

  }

}

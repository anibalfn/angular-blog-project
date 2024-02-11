import { Component } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css'
})
export class CardDescriptionComponent {
  public cardDescription: string = 'I am an anspirant to web developer and this is my personal blog';
}

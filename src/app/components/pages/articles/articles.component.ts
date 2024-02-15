import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private browser: Router) {
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

}}

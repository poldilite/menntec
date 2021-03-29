import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HOMEPAGE_DATA_QUERY } from '../../apollo/queries';
import { stringify } from '@angular/compiler/src/util';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('750ms 750ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 750ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  private homeQry: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;

  heroText = '';
  descriptionText = '';

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.homeQry = this.apollo
      .watchQuery({
        query: HOMEPAGE_DATA_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        this.heroText = this.data.homepage.heroText;
        this.descriptionText = this.data.homepage.descriptionText;
      });
  }
}

import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HOMEPAGE_DATA_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass'],
})
export class QuoteComponent implements OnInit {
  private descQuery: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;
  descText = '';

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.descQuery = this.apollo
      .watchQuery({
        query: HOMEPAGE_DATA_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        this.descText = this.data.homepage.descriptionText;
      });
  }
}

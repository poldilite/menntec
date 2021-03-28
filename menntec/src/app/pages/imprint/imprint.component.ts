import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IMPRINT_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.sass'],
})
export class ImprintComponent implements OnInit {
  private imprintQry: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.imprintQry = this.apollo
      .watchQuery({
        query: IMPRINT_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        console.log(this.data);
      });
  }
}

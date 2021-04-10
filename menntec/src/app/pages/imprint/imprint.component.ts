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
  impTitle = '';
  impText = '';

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

        // Put Title in TitleVariable
        this.impTitle = this.data.imprint.title;

        // Put Text in TextVariable and exchange h2 header to h5 header
        this.impText = this.data.imprint.imprintText;
        this.impText = this.impText.replace(/\h2/g, 'h5');

        console.log(this.impText);
      });
  }
}

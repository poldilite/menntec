import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DATASEC_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-datasec',
  templateUrl: './datasec.component.html',
  styleUrls: ['./datasec.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class DatasecComponent implements OnInit {
  private dataSecQuery: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;
  dsTitle = '';
  dsText = '';
  dsHeroTitle = '';

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataSecQuery = this.apollo
      .watchQuery({
        query: DATASEC_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        // Get Title
        this.dsTitle = this.data.dataPrivacy.title;

        // Get Text
        this.dsText = this.data.dataPrivacy.dataPrivacyText;
        this.dsText = this.dsText.replace(/\h2/g, 'h5');

        // Get HeroTitle
        this.dsHeroTitle = this.data.dataPrivacy.heroTitle;

        console.log(this.data);
      });
  }
}

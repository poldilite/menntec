import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HOMEPAGE_DATA_QUERY } from 'src/app/apollo/queries';
import { CONTACTS_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
  private hpQuery: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;
  heroText = '';
  heroTextSpan = '';
  heroTextNormal = '';
  descriptionText = '';

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.hpQuery = this.apollo
      .watchQuery({
        query: HOMEPAGE_DATA_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        this.heroText = this.data.homepage.heroText;
        const splitNumber = this.getPosition(this.heroText, ' ', 4);

        this.heroTextSpan = this.data.homepage.heroText.slice(0, splitNumber); // TODO: Berechnung anpassen
        this.heroTextNormal = this.data.homepage.heroText.slice(
          splitNumber + 1,
          this.heroText.length
        );
      });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.hpQuery.unsubscribe();
  }

  getPosition(text: string, subString: string, index: number): number {
    return text.split(subString, index).join(subString).length;
  }
}

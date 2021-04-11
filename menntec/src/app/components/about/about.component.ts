import { Subscription } from 'rxjs';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXing } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CONTACTS_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  faEnvelope = faEnvelope;
  faXing = faXing;

  private aboutQry: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;
  aboutData: any = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.aboutQry = this.apollo
      .watchQuery({
        query: CONTACTS_QUERY,
      })
      // tslint:disable-next-line: deprecation
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        this.aboutData = this.data.contacts;
      });
  }
}

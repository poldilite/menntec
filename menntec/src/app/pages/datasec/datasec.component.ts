import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DATASEC_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-datasec',
  templateUrl: './datasec.component.html',
  styleUrls: ['./datasec.component.sass'],
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
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        // Get Title
        console.log(this.data);
      });
  }
}

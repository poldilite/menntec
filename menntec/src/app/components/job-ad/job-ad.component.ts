import { Component, OnInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { JOBADS_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.sass'],
})
export class JobAdComponent implements OnInit {
  private jobAdQuery: Subscription = new Subscription();

  data: any = {};
  dataLength = 0;
  loading = false;
  errors: any;
  jobAds: any = [];
  j = 0;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.jobAdQuery = this.apollo
      .watchQuery({
        query: JOBADS_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
        this.jobAds = this.data.jobAds;
        this.dataLength = this.jobAds.length;

        this.j = this.dataLength - 1;
      });
  }

  @ViewChild('slide') slide: any;

  i = 0;

  next() {
    if (this.j !== 0) {
      this.j--;
      this.i = this.i - 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }

    console.log(this.j);
  }

  prev() {
    if (this.j !== this.jobAds.length - 1) {
      this.j++;
      this.i = this.i + 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }
  }
}

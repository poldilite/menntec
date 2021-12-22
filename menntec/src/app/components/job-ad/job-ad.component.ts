import { hyphenateSync } from 'hyphen/de';
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
  o = 0;
  bannerText1 = '';
  bannerText2 = '';

  jobContactFirstName = '';
  jobContactLastName = '';
  jobContactEMail = '';
  jobContactTel = '';

  ctaText = hyphenateSync(
    'Dann freuen wir uns auf Ihre aussagekräftige Bewerbung per Post oder per eMail.'
  );

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
        this.jobAds = this.data.jobAdPage.jobAdRelation.job_ads;
        this.dataLength = this.jobAds.length;

        this.bannerText1 = this.jobAds[0].bannerText1;
        this.bannerText2 = this.jobAds[0].bannerText2;

        this.jobContactFirstName =
          this.data.jobAdPage.jobAdRelation.contact.firstName;
        this.jobContactLastName =
          this.data.jobAdPage.jobAdRelation.contact.lastName;
        this.jobContactEMail = this.data.jobAdPage.jobAdRelation.contact.email;
        this.jobContactTel = this.data.jobAdPage.jobAdRelation.contact.phone;

        console.log(this.jobAds);

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

      this.bannerText1 = this.jobAds[this.j + 1].bannerText1;
      this.bannerText2 = this.jobAds[this.j + 1].bannerText2;
    }
  }

  prev() {
    if (this.j !== this.jobAds.length - 1) {
      this.j++;
      this.i = this.i + 75;
      this.slide.nativeElement.style.top = this.i + 'vh';

      this.bannerText1 = this.jobAds[this.j - 1].bannerText1;
      this.bannerText2 = this.jobAds[this.j - 1].bannerText2;
    }
  }

  ctaStatus = false;

  collapseCTA() {
    this.ctaStatus = !this.ctaStatus;
    console.log(this.ctaStatus);
  }
}

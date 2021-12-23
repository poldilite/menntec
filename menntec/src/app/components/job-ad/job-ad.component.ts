import { hyphenateSync } from 'hyphen/de';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { JOBADS_QUERY } from '../../apollo/queries';
import { Platform } from '@angular/cdk/platform';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.sass'],
})
export class JobAdComponent implements OnInit {
  @ViewChild('slide') slide: any;

  private jobAdQuery: Subscription = new Subscription();

  data: any = {};
  dataLength = 0;
  loading = false;
  errors: any;
  jobAds: any = [];
  j = 0;
  o = 0;
  i = 0; // TODO: change to speaking variables
  bannerText1 = '';
  bannerText2 = '';

  jobContactFirstName = '';
  jobContactLastName = '';
  jobContactEMail = '';
  jobContactTel = '';

  isDesktop$!: Observable<boolean>;
  isMobile$!: Observable<boolean>;
  isTablet$!: Observable<boolean>;

  ctaStatus = false;

  ctaText = hyphenateSync(
    'Dann freuen wir uns auf Ihre aussagekräftige Bewerbung per Post oder per eMail.'
  );

  constructor(
    private apollo: Apollo,
    public platform: Platform,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isDesktop$ = this.breakpointObserver
      .observe([Breakpoints.Web])
      .pipe(map(({ matches }) => matches));

    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));

    this.isTablet$ = this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .pipe(map(({ matches }) => matches));

    console.log(this.isTablet$);

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

  next(): void {
    if (this.j !== 0) {
      this.j--;
      this.i = this.i - 75;
      this.slide.nativeElement.style.top = this.i + 'vh';

      this.bannerText1 = this.jobAds[this.j + 1].bannerText1;
      this.bannerText2 = this.jobAds[this.j + 1].bannerText2;
    }
  }

  prev(): void {
    if (this.j !== this.jobAds.length - 1) {
      this.j++;
      this.i = this.i + 75;
      this.slide.nativeElement.style.top = this.i + 'vh';

      this.bannerText1 = this.jobAds[this.j - 1].bannerText1;
      this.bannerText2 = this.jobAds[this.j - 1].bannerText2;
    }
  }

  collapseCTA(): void {
    this.ctaStatus = !this.ctaStatus;
    console.log(this.ctaStatus);
  }
}

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
  loading = false;
  errors: any;
  jobAds: any = [];

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

        console.log(this.jobAds);
      });
  }

  jobAdArray: any = [
    {
      title: 'Anlagenmechaniker (m/w/d)',
      subTitle: 'für Sanitär, Heizung und Klimatechnik',
      fieldOfActivity: [
        'Installation von Neubauten',
        'Modernisierung von Altbauten',
        'Installation und Instandhaltung von technischen Anlagen in der Kleinindustrie sowie öffentlichen Gebäuden',
      ],
      whatToBring: [
        'Führerschein Klasse B',
        'Stets freundlicher Umgang mit unseren Kunden',
        'Zuverlässigkeit, Teamfähigkeit und ein hohes Maß an Leistungsbereitschaft',
      ],
      whatToExpect: [
        'Eine familiäre Arbeitsatmosphäre in einem sympathische Team',
        'Spannendes Aufgabenspektrum in einem inhabergeführten Betrieb',
        'Eigenverantwortung für ihr Aufgabengebiet',
        'Fachliche und persönliche Entwicklungsmöglichkeiten',
        'Leistungsgerechte Vergütung',
        'Festanstellung in Vollzeit',
      ],
    },
    {
      title: 'Meister (m/w/d)',
      subTitle: 'für Sanitär, Heizung und Klimatechnik',
      fieldOfActivity: [
        'Installation von Neubauten',
        'Modernisierung von Altbauten',
        'Installation und Instandhaltung von technischen Anlagen in der Kleinindustrie sowie öffentlichen Gebäuden',
      ],
      whatToBring: [
        'Führerschein Klasse B',
        'Stets freundlicher Umgang mit unseren Kunden',
        'Zuverlässigkeit, Teamfähigkeit und ein hohes Maß an Leistungsbereitschaft',
      ],
      whatToExpect: [
        'Eine familiäre Arbeitsatmosphäre in einem sympathische Team',
        'Spannendes Aufgabenspektrum in einem inhabergeführten Betrieb',
        'Eigenverantwortung für ihr Aufgabengebiet',
        'Fachliche und persönliche Entwicklungsmöglichkeiten',
        'Leistungsgerechte Vergütung',
        'Festanstellung in Vollzeit',
      ],
    },
    {
      title: 'Angehender Meister (m/w/d)',
      subTitle: 'für Sanitär, Heizung und Klimatechnik',
      fieldOfActivity: [
        'Installation von Neubauten',
        'Modernisierung von Altbauten',
        'Installation und Instandhaltung von technischen Anlagen in der Kleinindustrie sowie öffentlichen Gebäuden',
      ],
      whatToBring: [
        'Führerschein Klasse B',
        'Stets freundlicher Umgang mit unseren Kunden',
        'Zuverlässigkeit, Teamfähigkeit und ein hohes Maß an Leistungsbereitschaft',
      ],
      whatToExpect: [
        'Eine familiäre Arbeitsatmosphäre in einem sympathische Team',
        'Spannendes Aufgabenspektrum in einem inhabergeführten Betrieb',
        'Eigenverantwortung für ihr Aufgabengebiet',
        'Fachliche und persönliche Entwicklungsmöglichkeiten',
        'Leistungsgerechte Vergütung',
        'Festanstellung in Vollzeit',
      ],
    },
  ];

  @ViewChild('slide') slide: any;
  j = this.jobAdArray.length - 1;
  i = 0;

  next() {
    if (this.j !== 0) {
      this.j--;
      this.i = this.i - 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }

    console.log(this.jobAdArray.length);
  }

  prev() {
    if (this.j !== this.jobAdArray.length - 1) {
      this.j++;
      this.i = this.i + 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }
  }
}

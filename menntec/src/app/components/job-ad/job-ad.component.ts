import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.sass'],
})
export class JobAdComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
  ];

  @ViewChild('slide') slide: any;
  j = this.jobAdArray.length - 1;
  i = 0;

  next() {
    if (this.j != 0) {
      this.j--;
      this.i = this.i - 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }
  }

  prev() {
    if (this.j != this.jobAdArray.length - 1) {
      this.j++;
      this.i = this.i + 75;
      this.slide.nativeElement.style.top = this.i + 'vh';
    }
  }
}

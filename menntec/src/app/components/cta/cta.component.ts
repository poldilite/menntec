import { Component, OnInit } from '@angular/core';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.sass'],
})
export class CtaComponent implements OnInit {
  faChevronDown = faChevronDown;
  faEnvelope = faEnvelope;

  ctaText =
    'Sie suchen nach einem starken Partner für Ihr Projekt? Kontaktieren Sie uns gerne über unser Kontaktformular.';

  constructor() {}

  ngOnInit(): void {}
}

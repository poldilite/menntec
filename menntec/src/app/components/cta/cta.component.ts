import { Component, OnInit } from '@angular/core';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.sass'],
})
export class CtaComponent implements OnInit {
  faChevronDown = faChevronDown;
  faEnvelope = faEnvelope;

  constructor(private viewportScroller: ViewportScroller) {}

  ctaText =
    'Sie suchen nach einem starken Partner für Ihr Projekt? Kontaktieren Sie uns gerne über unser Kontaktformular.';

  ngOnInit(): void {}
}

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

  constructor() {}

  ngOnInit(): void {}
}

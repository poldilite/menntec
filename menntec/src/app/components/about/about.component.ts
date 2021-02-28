import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXing } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  faEnvelope = faEnvelope;
  faXing = faXing;

  constructor() {}

  ngOnInit(): void {}
}

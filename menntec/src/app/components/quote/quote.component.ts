import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HOMEPAGE_DATA_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass'],
})
export class QuoteComponent implements OnInit {
  @Input() descText!: string;

  constructor() {}

  ngOnInit(): void {}
}

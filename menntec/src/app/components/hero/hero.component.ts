import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
  @Input()
  heroText!: string;

  heroTextSpan = '';
  heroTextNormal = '';

  constructor() {}

  ngOnInit(): void {
    const splitNumber = this.getPosition(this.heroText, ' ', 4);

    this.heroTextSpan = this.heroText.slice(0, splitNumber); // TODO: Berechnung anpassen
    this.heroTextNormal = this.heroText.slice(
      splitNumber + 1,
      this.heroText.length
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {}

  getPosition(text: string, subString: string, index: number): number {
    return text.split(subString, index).join(subString).length;
  }
}

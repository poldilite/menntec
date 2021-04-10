import { Component, OnInit } from '@angular/core';
import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [
    trigger('slide', [
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('open => closed', animate('80ms')),
      transition('closed => open', animate('250ms')),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  isMenuOpen = false;

  ngOnInit(): void {}

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}

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
      img: 'https://images.unsplash.com/photo-1604537372111-68af9affc2aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
      name: 'Peter',
      date: '30.11.2021',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      img: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      name: 'Karl',
      date: '11.11.1911',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
      name: 'Günni',
      date: '01.01.2021',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
  ];

  @ViewChild('slide') slide: any;
  j = this.jobAdArray.length - 1;
  i = 0;

  next() {
    if (this.j != 0) {
      this.j--;
      this.i = this.i - 200;
      this.slide.nativeElement.style.top = this.i + 'px';
    }
  }

  prev() {
    if (this.j != this.jobAdArray.length - 1) {
      this.j++;
      this.i = this.i + 200;
      this.slide.nativeElement.style.top = this.i + 'px';
    }
  }
}

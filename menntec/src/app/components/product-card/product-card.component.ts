import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  products: any = [
    {
      id: 1,
      title: 'Heizung',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, aliquid!',
      image:
        'https://images.pexels.com/photos/4819052/pexels-photo-4819052.jpeg?cs=srgb&dl=pexels-erik-mclean-4819052.jpg&fm=jpg',
    },
    {
      id: 2,
      title: 'Sanitär',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, aliquid!',
      image:
        'https://images.pexels.com/photos/6238609/pexels-photo-6238609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 3,
      title: 'Klima',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, aliquid!',
      image:
        'https://images.pexels.com/photos/3964692/pexels-photo-3964692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  ngOnInit(): void {}
}

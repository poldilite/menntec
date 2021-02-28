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
        'Ob Neuinstallation, Modernisierung oder Wartung, mit unserem Know-How helfen wir Ihnen bei jedem Projekt.',
      image:
        'https://images.pexels.com/photos/6045338/pexels-photo-6045338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 2,
      title: 'Sanitär',
      description:
        'Im Sanitärbereich unterstützen wir Sie gerne bei ihrem Neu- oder Umbau.',
      image:
        'https://images.pexels.com/photos/6238609/pexels-photo-6238609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 3,
      title: 'Kälte, Klima & Lüftung',
      description:
        'Installation und Modernisierung von Lüftungs- und Klimaanlagen auf die gestiegenen Ansprüche.',
      image:
        'https://images.pexels.com/photos/3964692/pexels-photo-3964692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    } /*
    {
      id: 4,
      title: 'Lüftung',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, aliquid!',
      image:
        'https://cdn.pixabay.com/photo/2015/10/03/18/47/industry-970151_1280.jpg',
    }, */,
  ];

  ngOnInit(): void {}
}

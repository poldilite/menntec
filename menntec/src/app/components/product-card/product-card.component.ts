import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PRODUCTS_QUERY } from '../../apollo/queries';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent implements OnInit {
  private productQuery: Subscription = new Subscription();

  data: any = {};
  loading = false;
  errors: any;
  products: any = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loading = true;
    this.productQuery = this.apollo
      .watchQuery({
        query: PRODUCTS_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;

        this.products = this.data.services;

        console.log(this.products);
      });
  }
}

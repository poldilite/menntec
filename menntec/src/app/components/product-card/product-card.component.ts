import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PRODUCTS_QUERY } from '../../apollo/queries';
import { ProductData } from 'src/app/models/product-data';

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
  products: any;

  allProducts: Array<ProductData> = [];

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

        // tslint:disable-next-line: forin
        for (const index in this.products) {
          let newProduct = new ProductData();
          newProduct.id = index;
          newProduct.name = this.products[index].name;
          newProduct.description = this.products[index].description;
          newProduct.imageURL = this.products[index].image.url;
          newProduct.newService = this.products[index].new;
          newProduct.exclusiveService = this.products[index].exclusive;

          if (this.products[index].new && this.products[index].exclusive) {
            newProduct.newAndExclusiveService = true;
          }

          this.allProducts.push(newProduct);
        }

        console.log(this.allProducts);
      });
  }
}

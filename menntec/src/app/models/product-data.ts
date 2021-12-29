import { Injectable } from '@angular/core';
import { Adapter } from '../misc/adapter';
export class ProductData {
  constructor(
    public id?: string,
    public name?: string,
    public description?: string,
    public imageURL?: string,
    public newService?: boolean,
    public exclusiveService?: boolean,
    public newAndExclusiveService?: boolean
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class AdressAdapter implements Adapter<ProductData> {
  adapt(item: any): ProductData {
    return new ProductData(
      item.id,
      item.name,
      item.description,
      item.imageURL,
      item.newService,
      item.exclusiveService,
      item.newAndExclusivService
    );
  }
}

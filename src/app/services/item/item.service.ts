import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    { id: 1, name: 'Name 01', description: 'Product 1 Description', price: 50, imageURL: ''},
    { id: 2, name: 'Name 02', description: 'Product 2 Description', price: 25, imageURL: ''},
    { id: 3, name: 'Name 03', description: 'Product 3 Description', price: 30, imageURL: ''},
    { id: 4, name: 'Name 04', description: 'Product 4 Description', price: 100, imageURL: ''},
    { id: 5, name: 'Name 05', description: 'Product 5 Description', price: 500, imageURL: ''},
    { id: 6, name: 'Name 06', description: 'Product 6 Description', price: 10, imageURL: ''}
  ]

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }
}

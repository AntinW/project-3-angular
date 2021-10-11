import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item/item';
import {CartService} from "../../../services/cart/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemProduct: Item;
  @Input('shopping-cart') shoppingCart: any;


  constructor(private cartService: CartService) {
  }
  addToCart(){
    this.cartService.addToCart(this.itemProduct);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.itemProduct);
  }
  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.itemProduct.id];
    return item ? item.quantity: 0;
  }

}

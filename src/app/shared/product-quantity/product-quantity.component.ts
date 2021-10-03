import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Item} from "../../models/item/item";

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
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

}

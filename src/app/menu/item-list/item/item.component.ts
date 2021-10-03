import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item/item';
import {CartService} from "../../../services/cart/cart.service";
import {ShoppingCart} from "../../../models/shopping-cart";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemProduct: Item;
  @Input('shopping-cart') shoppingCart: ShoppingCart;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.itemProduct);
  }


}

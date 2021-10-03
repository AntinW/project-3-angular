import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Observable} from "rxjs";
import {ShoppingCart} from "../../models/shopping-cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$:Observable<ShoppingCart>;
  constructor(private cartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();



  }

}

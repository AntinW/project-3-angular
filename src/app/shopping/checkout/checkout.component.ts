import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CheckoutService} from "../../shared/services/checkout.service";
import {CartService} from "../../services/cart/cart.service";
import {ShoppingCart} from "../../models/shopping-cart";
import {Subscription} from "rxjs";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  formVar: FormGroup;
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private checkoutService: CheckoutService,
              private cartService: CartService,
              private orderService: OrderService) {}

  async ngOnInit() {
    this.formVar = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
    let cart$ = await this.cartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart);
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }

  placeOrder(){
    let order = {
      datePlaced: new Date().getTime().toString(),
      shipping: this.formVar.value,
      items: this.cart.items.map(i => {
        return{
          itemProduct: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    };
    this.orderService.storeOrder(order);
    window.alert("Order Placed")
  }


}

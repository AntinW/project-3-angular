import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {CartService} from "../services/cart/cart.service";
import {Observable} from "rxjs";
import {ShoppingCart} from "../models/shopping-cart";
import {switchMap} from "rxjs/operators";
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Header';
  searchTerm:String="";
  cart$: Observable<ShoppingCart>;
  constructor(private route:ActivatedRoute,
              private cartService: CartService) {

  }

  async ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    });
    this.cart$ = await this.cartService.getCart();

  }

}

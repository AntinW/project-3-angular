import {Component, OnDestroy, OnInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from 'src/app/models/item/item';
import {CartService} from "../../services/cart/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {

  itemsFromDB: any[];
  itemList: Item[] = [];
  cart: any;
  subscription: Subscription;


  constructor(db: AngularFireDatabase,
              private cartService: CartService
  ) {

    db.list('/items').valueChanges().subscribe(itemsFromDB => {
      this.itemsFromDB = itemsFromDB;
      console.log(itemsFromDB)
    })
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

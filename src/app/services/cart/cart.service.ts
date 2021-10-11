import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/compat/database";
import {Item} from "../../models/item/item";
import {Observable} from "rxjs";
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {ShoppingCart} from "../../models/shopping-cart";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }
  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
      .pipe(map((x:any) => new ShoppingCart(x.items)));
  }
  private getItemWithValueChanges(cartId: string, productId: string){
    return this.db.object('shopping-carts/' + cartId + '/items/' + productId).valueChanges();
  }
  private getItem(cartId: string, productId: string){
    return this.db.object('shopping-carts/' + cartId + '/items/' + productId);
  }
  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(itemProduct: Item){
    await this.updateItem(itemProduct, 1);
  }

  async removeFromCart(itemProduct: Item){
    await this.updateItem(itemProduct, -1);
  }
  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async updateItem(itemProduct: Item, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$:Observable<any> = this.getItemWithValueChanges(<string> cartId, itemProduct.id);
    let item$$ = this.getItem(<string> cartId, itemProduct.id);
    item$.pipe(take(1)).subscribe(item => {
      if(item === null){
        item$$.set({
          title: itemProduct.name || null,
          imageUrl:itemProduct.imageURL || null,
          price: itemProduct.price || null,
          quantity: 1
        });
      }else{
        item$$.update({quantity: (item.quantity || 0)+ change});
      }
    });
  }
}

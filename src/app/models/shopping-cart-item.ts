import {Item} from "./item/item";

export class ShoppingCartItem{

    constructor(public itemProduct: Item,
                public quantity: number) {
    }
  get totalPrice(){
    return this.itemProduct.price * this.quantity;
  }
}

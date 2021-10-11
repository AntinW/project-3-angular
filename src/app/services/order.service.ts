import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {orderBy} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) {

  }
  storeOrder(order){
    this.db.list('/orders').push(order);
  }
}

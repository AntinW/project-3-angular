import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private db: AngularFireDatabase) { }

  create(data: any){
    return this.db.list('/app').push(data);
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';

export interface IUser{

$key: string;
firstName: string;
lastName: string;
address: string;
mail: string;
number: number;


}
@Injectable({
  providedIn: 'root'
})
export class UserService {

usersRef: AngularFireList<any>;

userRef: AngularFireObject<any>;

  constructor(private db : AngularFireDatabase) { }

  AddUser(user: IUser){

  this.usersRef.push({

    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    number: user.number,
    mail: user.mail

    })
  }

// Fetch Single User Object
  GetUser(id: string) {
    this.userRef = this.db.object('promotion-list/' + id);
    return this.userRef;
  }

    // Fetch Promotion List
    GetUsersList() {
      this.usersRef = this.db.list('promotion-list');
      return this.usersRef;
    }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from 'src/app/models/item/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemsFromDB: any[];

  itemList: Item[] = [];


  constructor(db: AngularFireDatabase) { 
    db.list('/items').valueChanges().subscribe(itemsFromDB => {
      this.itemsFromDB = itemsFromDB;
      console.log(itemsFromDB)
    })
  }

  ngOnInit() {
    
  }

}

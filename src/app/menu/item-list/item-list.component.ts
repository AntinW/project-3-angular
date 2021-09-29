import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/services/item/item.service';
import { Item } from 'src/app/models/item/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[] = [];


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    
  }

}

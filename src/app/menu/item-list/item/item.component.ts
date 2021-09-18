import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemProduct: Item;


  constructor() { }

  ngOnInit(): void {
  }

}

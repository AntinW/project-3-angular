import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Item } from 'src/app/models/item/item';
import { Users } from 'src/app/models/user/users';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})

export class AdminpageComponent implements OnInit 
{
  title="Admin Page";

  database: any[];
  ndatabase: any[];

  items:Item[] = [];
  users:Users[] [];

  constructor(db: AngularFireDatabase) 
  { 
    db.list('/items').valueChanges().subscribe(database => 
    {
      this.database = database;
      console.log(database)
    })

    db.list('/app').valueChanges().subscribe(ndatabase => 
      {
        this.ndatabase = ndatabase;
        console.log(ndatabase)
      })
  }

  ngOnInit(): void 
  {

  }
}

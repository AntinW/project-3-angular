import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Products/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-gallery-page',
  templateUrl:'./gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})

export class GalleryPageComponent implements OnInit {
  title = 'Gallery Page';
 
  imagesFromDB: any[];

  products: Product[] = [];


  constructor(db: AngularFireDatabase,private productService:ProductService, private route:ActivatedRoute) { 
    db.list('/gallery').valueChanges().subscribe(imagesFromDB => {
      this.imagesFromDB = imagesFromDB;
      console.log(imagesFromDB)
    })
  }
  ngOnInit(): void {
    this.products = this.imagesFromDB;
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.products = this.productService.imagesFromDB.filter(product =>
          product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else
        this.products = this.productService.imagesFromDB;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Products/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  templateUrl:'./gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})

export class GalleryPageComponent implements OnInit {
  title = 'Gallery Page';
 
  products:Product[] = [];
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  this.route.params.subscribe(params => {
    if (params.searchTerm)
      this.products = this.productService.getAll().filter(cake =>
        cake.productName.toLowerCase().includes(params.searchTerm.toLowerCase()));
    else
      this.products = this.productService.getAll();
  })
  }
}

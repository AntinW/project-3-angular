import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Products/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  template: `


  <section class ="hero is-primary is-fullheight has-text-centered">
  <ul>
  <li *ngFor="let cake of products">
      
      <a>
          <img src="{{cake.imageUrl}}" alt="">
          <div class="content">

                <div class="name">
                   {{cake.productName}}
                </div>

                <star-rating 
                    [value]="cake.stars"
                    [totalstars]="5"
                    checkedcolor="red"
                    uncheckedcolor="black"
                    size="20px"
                    [readonly]="true">
                </star-rating>

                <div class="price">
                    <span>
                        {{cake.price|currency}}
                    </span>
                </div>

          </div>
      </a>
  </li>
</ul> 
   
</section>
      
 
  `,
  styles: [`
    .hero{
      background-image: url('/assets/image/background.jpg') !important;
      background-size: cover;
      background-position:center center;
    }
    .ul{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
  }
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    color:black;
  }
  
  ul li a{
    height: 20rem;
    width: 20rem;
    border: 1px solid whitesmoke;
    border-radius: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color:black;
  }
  li a:hover{
    opacity: 0.9;
    cursor: pointer;
  }
  `]
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

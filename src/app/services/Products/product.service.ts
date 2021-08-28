import { Injectable,  } from '@angular/core';
import { Product } from '../../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return[
      {
        productID: 15454,
        productName: 'Choclate Brownies', 
        price: 10,
        stars: 4.5,
        imageUrl: '/assets/image/products/cake-1.jpg',
        
      },
      {
        productID: 2,
        productName: 'Choclate Cake',
        price: 20,
        stars: 4,
        imageUrl: '/assets/image/products/cake-2.jpg',
        
      },
      {
        productID: 463564,
        productName: 'Cupcakes',
        price: 5, 
        stars: 3.5,
        imageUrl: '/assets/image/products/cake-3.jpg',
        
      },
      {
        productID: 65654,
        productName: 'Strawberry Cake',
        price: 2,
        stars: 3,
        imageUrl: '/assets/image/products/cake-4.jpg',
       
      },
                 
    ]
  }
}

import { Injectable,  } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  imagesFromDB: any[];

  getAll():Product[]{
    return[
      {
        productName: '',
        desc: 'Delicious choclate brownies with a melted center',
        stars: 4.5,
        imageUrl: '/assets/image/products/cake-1.jpg',
        
      },
      {
        productName: 'Choclate Cake',
        desc: 'Delicious choclate cake with a sweet moist center',
        stars: 4,
        imageUrl: '/assets/image/products/cake-2.jpg',
        
      },
      {
        productName: 'Cupcakes',
        desc: 'Cupcakes of all sorts of colours and flavours',
        stars: 3.5,
        imageUrl: '/assets/image/products/cake-3.jpg',
        
      },
      {
        productName: 'Strawberry Cake',
        desc: 'strawberry cheescake with a lime topping',
        stars: 3,
        imageUrl: '/assets/image/products/cake-4.jpg',
       
      },
                 
    ]


  
  }

  

}
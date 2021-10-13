import { Injectable,  } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  imagesFromDB: any[];

}

  


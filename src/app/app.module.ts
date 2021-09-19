import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {CheckoutService} from "./shared/services/checkout.service";
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './menu/item-list/item-list.component';
import { ItemComponent } from './menu/item-list/item/item.component';
import { CartComponent } from './menu/cart/cart.component';
import { CartItemComponent } from './menu/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    GalleryPageComponent,
    CheckoutComponent,
    MenuComponent,
    ItemListComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'checkout', component: CheckoutComponent}
    ])
  ],
  providers: [
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

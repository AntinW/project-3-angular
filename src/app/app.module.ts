import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat"
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {CartService} from "./services/cart/cart.service";
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';
import { UserService} from './services/register/user.service';
import {OrderService} from "./services/order.service";
import { RegisterComponent } from './register/register.component';

import { RegisterSuccessComponent } from './register-success/register-success.component';
import { AboutUsComponent } from './about-us/about-us.component';



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
    SearchbarComponent,
    AdminpageComponent,
    ProductQuantityComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    AboutUsComponent,
    routingComponents,

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
    CheckoutService,
    CartService,
    UserService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {CartComponent} from "./menu/cart/cart.component";
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  
  {path:'', component: HomepageComponent},
  {path: 'gallery-page',component: GalleryPageComponent},
  {path: 'search/:searchTerm', component: GalleryPageComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'shopping-cart',component: CartComponent},
  {path: 'adminpage', component: AdminpageComponent},
  {path: 'adminpage', component: AdminpageComponent},

  {path: 'register', component: RegisterComponent}


  {path: 'register', component: RegisterComponent},
  {path: 'about-us',component:AboutUsComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent]

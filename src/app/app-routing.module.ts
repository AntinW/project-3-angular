import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  {path: 'gallery-page',component: GalleryPageComponent},
  {path: 'search/:searchTerm', component: GalleryPageComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'adminpage', component: AdminpageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

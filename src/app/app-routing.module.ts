import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  {path: 'gallery-page',component: GalleryPageComponent},
  {path: 'search/:searchTerm', component: GalleryPageComponent},
  {path: 'menu',component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

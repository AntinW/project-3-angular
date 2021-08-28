import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivatedRoute } from '@angular/router';


const routes: Routes = [
  { path:'', component: HomepageComponent},

  {path: 'gallery-page',component: GalleryPageComponent},

  {path: 'search/:searchTerm', component: GalleryPageComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{


  path:'',
  component: HomepageComponent
},
{
  path: 'gallery-page',
  component: GalleryPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

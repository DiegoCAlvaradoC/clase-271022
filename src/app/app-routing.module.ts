import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageFormComponent } from './page-form/page-form.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'catalogo',
    component:  PageCatalogComponent
  },
  {
    path: 'compra',
    component: PageFormComponent
  },
  {
    path: 'contactanos',
    component: PageContactUsComponent
  },
  {
    path: 'facebook',
    redirectTo: 'https://www.facebook.com/yourpage'

  },
  {
    path: 'twitter',
    redirectTo: 'https://twitter.com/yourpage'
  },
  {
    path: 'instagram',
    redirectTo: 'https://www.instagram.com/yourpage'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

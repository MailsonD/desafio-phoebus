import { CartModule } from './cart/cart.module';
import { ComicsModule } from './comics/comics.module';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => HomeModule,
      },
      {
        path: 'comics',
        loadChildren: () => ComicsModule,
      },
      {
        path: 'cart',
        loadChildren: () => CartModule,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }

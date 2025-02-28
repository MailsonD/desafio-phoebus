import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsComponent } from './comics.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
    children: [
      {
        path: 'list',
        component: ComicsListComponent,
      },
      {
        path: ':id/detail',
        component: ComicDetailComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ComicsRoutingModule { }

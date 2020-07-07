import { ComicsModule } from './comics/comics.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComicsComponent } from './comics/comics.component';



@NgModule({
  declarations: [ PagesComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    ComicsModule
  ]
})
export class PagesModule { }

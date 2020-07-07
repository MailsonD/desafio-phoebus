import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [ HomeComponent, PagesComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

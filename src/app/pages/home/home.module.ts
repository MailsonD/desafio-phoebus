import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RareComicsComponent } from './rare-comics/rare-comics.component';


@NgModule({
  declarations: [ HomeComponent, RareComicsComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
  exports: [
    RareComicsComponent
  ]
})
export class HomeModule { }

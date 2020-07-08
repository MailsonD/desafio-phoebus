import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { InitialComicsComponent } from './initial-comics/initial-comics.component';


@NgModule({
  declarations: [ HomeComponent, InitialComicsComponent, HighlightsComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
})
export class HomeModule { }

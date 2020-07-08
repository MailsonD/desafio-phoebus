import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { InitialComicsComponent } from './initial-comics/initial-comics.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ HomeComponent, InitialComicsComponent, HighlightsComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
})
export class HomeModule { }

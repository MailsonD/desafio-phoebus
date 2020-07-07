import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';



@NgModule({
  declarations: [ ComicsComponent, ComicsListComponent ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }

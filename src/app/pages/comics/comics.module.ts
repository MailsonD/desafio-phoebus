import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from './../../components/components.module';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';



@NgModule({
  declarations: [ ComicsComponent, ComicsListComponent, ComicDetailComponent ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    ComponentsModule,
    MatProgressSpinnerModule,
  ]
})
export class ComicsModule { }

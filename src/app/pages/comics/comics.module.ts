import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from './../../components/components.module';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [ ComicsComponent, ComicsListComponent, ComicDetailComponent ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    ComponentsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
  ]
})
export class ComicsModule { }

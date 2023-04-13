import { AnimeListComponent } from './anime-list/anime-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AnimeListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AnimeListComponent
  ]
})
export class AnimesModule { }

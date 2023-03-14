import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import { MovieEffects, movieReducer } from './state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MoviesModule {}

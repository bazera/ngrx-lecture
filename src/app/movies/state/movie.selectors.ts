import { createFeatureSelector } from '@ngrx/store';
import { MoviesState } from './movie.state';

export const selectMovies = createFeatureSelector<MoviesState>('movies');

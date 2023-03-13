import { createFeatureSelector } from '@ngrx/store';
import { MoviesState } from '../app.state';

export const selectMovies = createFeatureSelector<MoviesState>('movies');

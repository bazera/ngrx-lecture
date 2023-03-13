import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../movie.model';
import { MoviesState } from './app.state';

export const selectMovies = createFeatureSelector<MoviesState>('movies');

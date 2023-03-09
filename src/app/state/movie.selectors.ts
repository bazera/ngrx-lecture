import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../movie.model';

export const selectMovies = createFeatureSelector<Movie[]>('movies');

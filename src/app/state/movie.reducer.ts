import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie.model';
import { addMovies } from './movie.actions';

const initialState: Movie[] = [];

export const movieReducer = createReducer(
  initialState,
  on(addMovies, (_, { movies }) => movies)
);

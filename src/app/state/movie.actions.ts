import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie.model';

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFail = createAction('[Movies] Load Movies Fail');

export const loadMovies = createAction('[Movies] Load Movies');

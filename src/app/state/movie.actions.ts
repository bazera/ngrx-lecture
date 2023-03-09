import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie.model';

export const addMovies = createAction(
  '[Movies] Adding to Movies',
  props<{ movies: Movie[] }>()
);

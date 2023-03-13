import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie.model';
import { MoviesState } from './app.state';
import { loadMoviesFail, loadMoviesSuccess } from './movie.actions';

const initialState: MoviesState = {
  list: [],
  errorMessage: '',
};

export const movieReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (_, { movies }) => ({ list: movies })),
  on(loadMoviesFail, (_) => ({
    list: [],
    errorMessage: 'Something went wrong',
  }))
);

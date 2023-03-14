import { createReducer, on } from '@ngrx/store';
import { loadMoviesFail, loadMoviesSuccess } from './movie.actions';
import { MoviesState } from './movie.state';

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

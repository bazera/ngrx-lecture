import { Movie } from '../movie.model';

export interface AppState {
  movies: MoviesState;
  collection: CollectionState;
}

export interface CollectionState {
  list: Movie[];
  errorMessage?: string;
}

export interface MoviesState {
  list: Movie[];
  errorMessage?: string;
}

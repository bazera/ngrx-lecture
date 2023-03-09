import { Movie } from '../movie.model';

export interface AppState {
  movies: Movie[];
  collection: CollectionState;
}

export interface CollectionState {
  list: Movie[];
  errorMessage?: string;
}

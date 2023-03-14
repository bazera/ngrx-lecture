import { Movie } from 'src/app/movie.model';

export interface CollectionState {
  list: Movie[];
  errorMessage?: string;
}

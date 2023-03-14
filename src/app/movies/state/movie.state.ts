import { Movie } from 'src/app/movie.model';

export interface MoviesState {
  list: Movie[];
  errorMessage?: string;
}

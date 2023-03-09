import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { MovieApiService } from './movie-api.service';
import { Movie } from './movie.model';
import { addMovies } from './state/movie.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: MovieApiService, private store: Store) {}

  getMovies() {
    this.apiService
      .getMovies()
      .subscribe((movies) => this.store.dispatch(addMovies({ movies })));
  }
}

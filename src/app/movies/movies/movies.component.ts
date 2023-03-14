import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CollectionActions } from 'src/app/collection/state';
import { Movie } from 'src/app/movie.model';
import { loadMovies, MoviesState, selectMovies } from '../state';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$ = this.store.select(selectMovies);

  constructor(private store: Store<{ movies: MoviesState }>) {}

  addToCollection(movie: Movie) {
    this.store.dispatch(CollectionActions.addToCollection({ movie }));
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Movie } from './movie.model';
import { AppState } from './state/app.state';
import { CollectionActions } from './state/collection.actions';
import { selectCollection } from './state/collection.selectors';
import { loadMovies } from './state/movie.actions';
import { selectMovies } from './state/movie.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies$ = this.store.select(selectMovies);

  collection$ = this.store.select(selectCollection).pipe(
    tap((collection) => {
      if (collection.errorMessage) {
        this.toastr.error(collection.errorMessage);
      }
    })
  );

  constructor(private store: Store<AppState>, private toastr: ToastrService) {}

  addToCollection(movie: Movie) {
    this.store.dispatch(CollectionActions.addToCollection({ movie }));
  }

  removeFromCollection(movieId: string) {
    this.store.dispatch(CollectionActions.removeFromCollection({ movieId }));
  }

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }
}

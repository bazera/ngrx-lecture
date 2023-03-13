import { Injectable } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadMoviesSuccess, loadMovies, loadMoviesFail } from './movie.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      switchMap(() =>
        this.movieApiService.getMovies().pipe(
          map((movies) => loadMoviesSuccess({ movies })),
          catchError(() => of(loadMoviesFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieApiService: MovieApiService
  ) {}
}

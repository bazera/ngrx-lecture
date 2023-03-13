import { Injectable } from '@angular/core';
import { MovieApiService } from '../../movie-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CollectionActions } from './collection.actions';

@Injectable()
export class CollectionEffects {
  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.loadCollection),
      switchMap(() =>
        this.movieApiService.getCollection().pipe(
          map((movies) => CollectionActions.loadCollectionSuccess({ movies })),
          catchError(() =>
            of(CollectionActions.loadCollectionError({ errorMessage: 'Error' }))
          )
        )
      )
    )
  );

  addToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.addToCollection),
      switchMap((action) =>
        this.movieApiService.addToCollection(action.movie).pipe(
          map(() => CollectionActions.loadCollection()),
          catchError(() =>
            of(
              CollectionActions.addToCollectionError({
                errorMessage: 'Something Went Wrong',
              })
            )
          )
        )
      )
    )
  );

  removeFromCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.removeFromCollection),
      switchMap((action) =>
        this.movieApiService
          .removeFromCollection(action.movieId)
          .pipe(map(() => CollectionActions.loadCollection()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieApiService: MovieApiService
  ) {}
}

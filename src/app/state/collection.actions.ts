import { createAction, createActionGroup, props } from '@ngrx/store';
import { Movie } from '../movie.model';

// export const addToCollection = createAction(
//   '[Collection] Adding to Collection',
//   props<{ movie: Movie }>()
// );

// export const removeFromCollection = createAction(
//   '[Collection] Removing from Collection',
//   props<{ movieId: string }>()
// );

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add To Collection': props<{ movie: Movie }>(),
    'Remove From Collection': props<{ movieId: string }>(),
  },
});

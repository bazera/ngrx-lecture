import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Movie } from '../../movie.model';

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
    'Add To Collection Error': props<{ errorMessage: string }>(),
    'Remove From Collection': props<{ movieId: string }>(),
    'Load Collection': emptyProps(),
    'Load Collection Success': props<{ movies: Movie[] }>(),
    'Load Collection Error': props<{ errorMessage: string }>(),
  },
});

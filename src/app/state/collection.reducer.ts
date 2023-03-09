import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie.model';
import { CollectionState } from './app.state';
import { CollectionActions } from './collection.actions';

const initialState: CollectionState = {
  errorMessage: '',
  list: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.addToCollection, (state, { movie }) => {
    if (state.list.includes(movie)) {
      return {
        list: [...state.list],
        errorMessage: 'Movie already exists in collection',
      };
    }

    return {
      list: [...state.list, movie],
    };
  }),
  on(CollectionActions.removeFromCollection, (state, { movieId }) => {
    return {
      list: state.list.filter((m) => m.id !== movieId),
    };
  })
);

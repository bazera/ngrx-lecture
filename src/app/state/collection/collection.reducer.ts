import { createReducer, on } from '@ngrx/store';
import { CollectionState } from '../app.state';
import { CollectionActions } from './collection.actions';

const initialState: CollectionState = {
  errorMessage: '',
  list: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.loadCollectionSuccess, (_, { movies }) => ({
    list: movies,
  })),
  on(CollectionActions.addToCollectionError, (state, { errorMessage }) => ({
    list: [...state.list],
    errorMessage,
  }))
);

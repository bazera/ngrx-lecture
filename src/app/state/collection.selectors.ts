import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../movie.model';
import { CollectionState } from './app.state';

export const selectCollection =
  createFeatureSelector<CollectionState>('collection');

import { createFeatureSelector } from '@ngrx/store';
import { CollectionState } from './collection.state';

export const selectCollection =
  createFeatureSelector<CollectionState>('collection');

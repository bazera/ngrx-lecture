import { createFeatureSelector } from '@ngrx/store';
import { CollectionState } from '../app.state';

export const selectCollection =
  createFeatureSelector<CollectionState>('collection');

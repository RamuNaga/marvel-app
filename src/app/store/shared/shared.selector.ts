import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getEtag = createSelector(getSharedState, (state) => {
  return state && state.etag;
});

export const getDialog = createSelector(getSharedState, (state) => {
  return state && state.showDialog;
});

export const isLoading = createSelector(getSharedState, (state) => {
  return state && state.showLoading;
});

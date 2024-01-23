import { Action, createReducer, on } from '@ngrx/store';
import { SharedState, initialSharedState } from './shared.state';
import {
  setDialogPopup,
  setErrorMessage,
  setEtag,
  setLoadingSpinner,
} from './shared.action';

const _sharedReducer = createReducer(
  initialSharedState,

  on(setEtag, (state, action) => {
    return {
      ...state,
      etag: action.etag,
    };
  }),
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setDialogPopup, (state, action) => {
    return {
      ...state,
      showDialog: action.showDialog,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: { message: action.message },
    };
  })
);

export function SharedReducer(state: SharedState | undefined, action: Action) {
  return _sharedReducer(state, action);
}

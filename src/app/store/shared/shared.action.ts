import { createAction, props } from '@ngrx/store';

export const SET_ETAG = '[shared state] set etag';
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_DIALOG_ACTION = '[shared state] set dialog popup';
export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const setEtag = createAction(SET_ETAG, props<{ etag: string }>());

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setDialogPopup = createAction(
  SET_DIALOG_ACTION,
  props<{ showDialog: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);

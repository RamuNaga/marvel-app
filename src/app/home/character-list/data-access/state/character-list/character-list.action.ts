import { createAction, props } from '@ngrx/store';
import { Character } from '../../../../../../core/model/marvel-model';

export const FETCH_CHARACTERS = '[characters] fetch.';

export const FETCH_CHARACTERS_SUCCESS = '[characters] fetch success.';

export const fetchCharacters = createAction(FETCH_CHARACTERS);

export const fetchCharactersSuccess = createAction(
  FETCH_CHARACTERS_SUCCESS,
  props<{ characters: Character[]; count: number }>()
);

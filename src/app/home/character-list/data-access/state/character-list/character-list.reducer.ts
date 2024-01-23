import { createReducer, on, Action } from '@ngrx/store';
import {
  CharacterListState,
  charactersInitialState,
} from './character-list.state';
import {
  fetchCharacters,
  fetchCharactersSuccess,
} from './character-list.action';

const _bookmarksReducer = createReducer(
  charactersInitialState,
  on(fetchCharactersSuccess, (state, action) => {
    return {
      ...state,
      characters: action.characters,
      count: action.count,
    };
  })
);

export function CharactersReducer(
  state: CharacterListState | undefined,
  action: Action
) {
  return _bookmarksReducer(state, action);
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterListState } from './character-list.state';
import { getCurrentRoute } from '../../../../../store/router/router-selector';
import { RouterStateUrl } from '../../../../../store/router/custom-serializer';

export const CHARACTERS_STATE_NAME = 'characters';

const getCharactersListState = createFeatureSelector<CharacterListState>(
  CHARACTERS_STATE_NAME
);

export const getCharacters = createSelector(getCharactersListState, (state) => {
  return state.characters;
});

export const getCharactersCount = createSelector(
  getCharactersListState,
  (state) => {
    return state.count;
  }
);

export const getCharacterId = createSelector(
  getCharacters,
  getCurrentRoute,
  (characters, route: RouterStateUrl) => {
    return (
      characters &&
      characters.find((character) => character.id == route.params['id'])
    );
  }
);

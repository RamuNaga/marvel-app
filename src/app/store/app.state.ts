import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { CharactersReducer } from '../home/character-list/data-access/state/character-list/character-list.reducer';
import { CHARACTERS_STATE_NAME } from '../home/character-list/data-access/state/character-list/character-list.selector';
import { CharacterListState } from '../home/character-list/data-access/state/character-list/character-list.state';
import { SharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface Appstate {
  [CHARACTERS_STATE_NAME]: CharacterListState;
  [SHARED_STATE_NAME]: SharedState;
  router: RouterReducerState;
}

export const appReducer = {
  [CHARACTERS_STATE_NAME]: CharactersReducer,
  [SHARED_STATE_NAME]: SharedReducer,
  router: routerReducer,
};

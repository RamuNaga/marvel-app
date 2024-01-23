import { Character } from '../../../../../../core/model/marvel-model';

export interface CharacterListState {
  characters: Character[];
  count: number;
}

export const charactersInitialState: CharacterListState = {
  characters: [],
  count: 0,
};

import { Character } from '../model/marvel-model';

export const getImageUrl = (character: Character) => {
  const imgurl =
    character?.thumbnail.path + '.' + character?.thumbnail.extension;
  return imgurl;
};

import { Character } from '../model/marvel-model';

export const getImageUrl = (character: Character) => {
  const imgurl =
    character?.thumbnail.path +
    '/standard_xlarge' +
    '.' +
    character?.thumbnail.extension;
  return imgurl;
};

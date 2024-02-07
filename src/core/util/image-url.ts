import { Character, Comic } from '../model/marvel-model';

export const getImageUrl = (image: Character | Comic) => {
  const imgurl =
    image?.thumbnail.path +
    '/standard_xlarge' +
    '.' +
    image?.thumbnail.extension;
  return imgurl;
};

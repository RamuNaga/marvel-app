import { Comic } from '../model/marvel-model';

export interface ComicDataWrapperResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicDataContainer;
  etag: string;
}

export interface ComicDataContainer {
  offset: number;
  limit?: number;
  total?: number;
  count: number;
  results: Comic[];
}

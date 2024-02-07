export interface CharacterDataWrapperResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI?: string;
  urls: Url[];
  thumbnail: Image;
  comics: Comics;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export interface CharacterDataContainer {
  offset: number;
  limit?: number;
  total?: number;
  count: number;
  results: Character[];
}

export interface Url {
  type: string;
  url: string;
}
export interface Image {
  path: string;
  extension: string;
}
export interface Comics {
  available: number;
  collectionURI: string;
  returned: number;
  items: ComicSummary;
}
export interface ComicSummary {
  resourceURI: string;
  name: string;
}
export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary;
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary;
}
export interface EventSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}
export interface Variant {
  resourceURI: string;
  name: string;
}

export interface Collection {
  resourceURI: string;
  name: string;
}
export interface collectedIssue {
  resourceURI: string;
  name: string;
}
export interface ComicDate {
  type: string;
  date: string;
}
export interface ComicPrice {
  type: string;
  price: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
}

export interface ComicCreator {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}
export interface ComicCharacter {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}
export interface ComicStories {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}
export interface ComicEvents {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}
export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: Variant[];
  collections: Collection[];
  collectedIssues: collectedIssue[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: ComicCreator;
  characters: ComicCharacter;
  stories: ComicStories;
  events: ComicEvents;
}

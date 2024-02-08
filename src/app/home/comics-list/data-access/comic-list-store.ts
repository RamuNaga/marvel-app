import { Injectable } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  tapResponse,
} from '@ngrx/component-store';
import { Comic, Comics } from '../../../../core/model/marvel-model';
import { ApiService } from '../../../../core/http-client/api.service';
import { Observable, pipe, switchMap } from 'rxjs';
import { ComicDataWrapperResponse } from '../../../../core/api-types/comicDataWrapper';
import { isPublicKeyExist } from '../../../../core/util/time-stamp';
import { HttpErrorResponse } from '@angular/common/http';

export interface ComicListState {
  comics: Comic[];
}

export const initialComicListState: ComicListState = {
  comics: [],
};

@Injectable()
export class ComicListStoreService
  extends ComponentStore<ComicListState>
  implements OnStateInit
{
  constructor(private apiService: ApiService) {
    super(initialComicListState);
  }
  ngrxOnStateInit() {
    if (isPublicKeyExist()) this.getComics();
  }

  // SELECTORS
  comics$ = this.select((store) => store.comics);

  // EFFECTS
  readonly getComics = this.effect<void>(
    pipe(
      switchMap(() =>
        this.apiService.get<ComicDataWrapperResponse>('/v1/public/comics').pipe(
          tapResponse(
            (response) => {
              console.log('response.data.results', response.data.results);
              this.patchState({ comics: response.data.results });
            },
            (error) => {
              console.error('error getting tags: ', error);
            }
          )
        )
      )
    )
  );

  readonly fetchComicById = this.effect<number>((comicId$) => {
    return comicId$.pipe(
      switchMap((id) => {
        console.log('comicID', id);
        return this.apiService
          .get<ComicDataWrapperResponse>('/v1/public/comics/' + `${id}`)
          .pipe(
            tapResponse(
              (response) => this.addComic(response.data.results[0]),
              (error) => {
                console.error('error getting tags: ', error);
              }
            )
          );
      })
    );
  });

  readonly addComic = this.updater((state, comic: Comic) => ({
    comics: [...state.comics, comic],
  }));

  selectComic(comicId: number) {
    return this.select((state) => state.comics.find((c) => c.id == comicId));
  }
}

import { Injectable } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  tapResponse,
} from '@ngrx/component-store';
import { Comic, Comics } from '../../../../core/model/marvel-model';
import { ApiService } from '../../../../core/http-client/api.service';
import { pipe, switchMap } from 'rxjs';
import { ComicDataWrapperResponse } from '../../../../core/api-types/comicDataWrapper';

export interface ComicListState {
  comics: Comic[];
}

@Injectable()
export class ComicListStoreService
  extends ComponentStore<ComicListState>
  implements OnStateInit
{
  constructor(private apiService: ApiService) {
    super({ comics: [] });
  }
  ngrxOnStateInit() {
    console.log('ngrxOnStateInit calling');
    this.getComics();
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
}

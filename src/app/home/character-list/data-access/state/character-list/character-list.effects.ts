import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../../../core/http-client/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchCharacters,
  fetchCharactersSuccess,
} from './character-list.action';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { CharacterDataWrapperResponse } from '../../../../../../core/api-types/characterDataWrapper';
import { Appstate } from '../../../../../store/app.state';
import { Store } from '@ngrx/store';
import {
  setErrorMessage,
  setEtag,
  setLoadingSpinner,
} from '../../../../../store/shared/shared.action';
import { charactersInitialState } from './character-list.state';

@Injectable()
export class CharactersEffects {
  private readonly apiService = inject(ApiService);
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store<Appstate>);

  fetchCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchCharacters),
      switchMap((action) => {
        return this.apiService
          .get<CharacterDataWrapperResponse>('/v1/public/characters')
          .pipe(
            map((result) => {
              this.store.dispatch(setEtag({ etag: result.etag }));
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return fetchCharactersSuccess({
                characters: result.data.results,
                count: result.data.count,
              });
            }),
            catchError((errResp) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              let errorMessage = '';
              if (errResp && errResp.error && errResp.error.message) {
                this.store.dispatch(setErrorMessage({ message: errorMessage }));
                this.store.dispatch(
                  fetchCharactersSuccess({
                    characters: charactersInitialState.characters,
                    count: 0,
                  })
                );
              }
              return EMPTY;
            })
          );
      })
    );
  });
}

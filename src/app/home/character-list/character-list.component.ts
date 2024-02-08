import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  Character,
  CharacterDataWrapperResponse,
} from '../../../core/model/marvel-model';
import { CharacterComponent } from './character/character.component';
import { CharacterDataWrapper as CharacterDataWrapperRes } from '../../../core/data-access/db-data';
import { Store } from '@ngrx/store';
import { Appstate } from '../../store/app.state';
import {
  getCharacters,
  getCharactersCount,
} from './data-access/state/character-list/character-list.selector';
import { AsyncPipe } from '@angular/common';
import { fetchCharacters } from './data-access/state/character-list/character-list.action';
import { setLoadingSpinner } from '../../store/shared/shared.action';
import { isLoading } from '../../store/shared/shared.selector';
import { LoaderComponent } from '../../../core/components/loader/loader.component';
import { Observable, Subscription, tap, withLatestFrom } from 'rxjs';
import { CharacterService } from './data-access/services/character.service';
import { CharacterDialogComponent } from './character-dialog/character-dialog.component';
import { isPublicKeyExist } from '../../../core/util/time-stamp';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CharacterComponent,
    AsyncPipe,
    LoaderComponent,
    CharacterDialogComponent,
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characterDataWrapperResponse: CharacterDataWrapperResponse | undefined;
  characters: Character[] = [];

  private readonly store = inject(Store<Appstate>);
  readonly isLoading$ = this.store.select(isLoading);

  private readonly characterService = inject(CharacterService);

  private readonly characters$ = this.store
    .select(getCharacters)
    .subscribe((characters) => (this.characters = characters));

  private $subs: Subscription | undefined;

  private readonly count$ = this.store
    .select(getCharactersCount)
    .pipe(
      tap((count) => {
        if (count <= 0) {
          if (isPublicKeyExist()) this.getCharactersListFromApi();
          else this.getCharactersData();
        }
      })
    )
    .subscribe();

  ngOnInit(): void {
    this.$subs = this.characterService
      .receivedSearchString()
      .pipe(
        withLatestFrom(this.store.select(getCharacters)),
        tap(([searchStr, characters]) => {
          if (isPublicKeyExist()) {
            this.characters = characters;
          } else {
            this.getCharactersData();
          }
          if (searchStr.length > 0) {
            this.filterCharacters(searchStr);
          }
        })
      )
      .subscribe();
  }

  filterCharacters(searchStr: string) {
    this.characters = this.characters.filter((character) => {
      return character.name?.toLowerCase().includes(searchStr);
    });
  }

  ngOnDestroy(): void {
    //console.log('ngOnDestroy calling');
    this.$subs?.unsubscribe();
    this.characters$.unsubscribe();
    this.count$.unsubscribe();
  }

  /**
   * local mock data fetching logic
   */
  getCharactersData() {
    this.characterDataWrapperResponse = {
      ...CharacterDataWrapperRes,
    } as unknown as CharacterDataWrapperResponse;
    this.characters = this.characterDataWrapperResponse.data.results;
  }
  /**
   * API fetching logic
   */
  getCharactersListFromApi() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(fetchCharacters());
  }
}

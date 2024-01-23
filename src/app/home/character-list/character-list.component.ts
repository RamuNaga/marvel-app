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
import { Observable, Subscription, tap } from 'rxjs';
import { CharacterService } from './data-access/services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterComponent, AsyncPipe, LoaderComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characterDataWrapperResponse: any;
  characters: Character[] = [];

  filterCharacters: Character[] = [];

  private readonly store = inject(Store<Appstate>);
  private readonly characterService = inject(CharacterService);

  private readonly characters$ = this.store
    .select(getCharacters)
    .subscribe((characters) => (this.characters = characters));

  readonly isLoading$ = this.store.select(isLoading);

  private $subs: Subscription | undefined;

  private readonly count$ = this.store
    .select(getCharactersCount)
    .pipe(
      tap((count) => {
        if (count <= 0) {
          this.getCharactersListFromApi();
          //this.getCharactersData();
        }
      })
    )
    .subscribe();

  constructor() {}

  ngOnInit(): void {
    this.$subs = this.characterService
      .receivedSearchString()
      .subscribe((searchStr) => {
        this.characters = this.characters.filter((character) => {
          return character.name?.toLowerCase().includes(searchStr);
        });
        if (searchStr.length == 0 || this.characters.length == 0) {
          this.store
            .select(getCharacters)
            .subscribe((characters) => (this.characters = characters));
        }
      });
  }

  ngOnDestroy(): void {
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
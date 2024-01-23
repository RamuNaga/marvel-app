import { AsyncPipe, CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CharacterDataWrapper as CharacterDataWrapperRes } from '../../../../core/data-access/db-data';
import {
  Character,
  CharacterDataWrapperResponse,
  ComicSummary,
  EventSummary,
  SeriesSummary,
  StorySummary,
} from '../../../../core/model/marvel-model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getImageUrl } from '../../../../core/util/image-url';
import { MatCardModule } from '@angular/material/card';
import { Observable, switchMap, tap } from 'rxjs';
import { Appstate } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { getCharacterId } from '../data-access/state/character-list/character-list.selector';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [NgIf, MatCardModule, MatExpansionModule, NgForOf, AsyncPipe],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  /**
   * Mock data variables
   *
   */
  characterDataWrapperResponse: any;
  character: Character | undefined;

  id: number = 1009148;
  imgUrl: string | undefined;
  storyItems: StorySummary[] = [];
  comicItems: ComicSummary[] = [];
  eventItems: EventSummary[] = [];
  seriesItems: SeriesSummary[] = [];

  private readonly store = inject(Store<Appstate>);

  /**
   *  Data fetch from store
   */
  character$: Observable<Character | undefined> =
    this.store.select(getCharacterId);

  characterStoryItems$ = this.store
    .select(getCharacterId)
    .pipe(
      tap((character) => {
        this.imgUrl = getImageUrl(character as Character);
        this.eventItems = character?.comics?.items as unknown as ComicSummary[];
        this.storyItems = character?.stories
          ?.items as unknown as StorySummary[];
        this.seriesItems = character?.series
          ?.items as unknown as SeriesSummary[];
      })
    )
    .subscribe();

  /**
   * Mock data logic to populate 
   * this.route.params
    .pipe(switchMap((params) => (this.id = params['id'])))
     .subscribe();
    this.getCharacterData();
   */

  ngOnInit(): void {
    // this.route.params
    //   .pipe(switchMap((params) => (this.id = params['id'])))
    //   .subscribe();
    // this.getCharacterData();
  }

  getCharacterData() {
    this.characterDataWrapperResponse = {
      ...CharacterDataWrapperRes,
    } as unknown as CharacterDataWrapperResponse;
    this.character = this.characterDataWrapperResponse.data.results.find(
      (character: Character) => character.id == this.id
    );
    this.imgUrl = getImageUrl(this.character as Character);
    this.storyItems =
      (this.character?.stories.items as unknown as StorySummary[]) || [];

    this.comicItems =
      (this.character?.comics.items as unknown as ComicSummary[]) || [];

    this.seriesItems =
      (this.character?.series.items as unknown as SeriesSummary[]) || [];

    this.eventItems =
      (this.character?.events.items as unknown as EventSummary[]) || [];
  }
}

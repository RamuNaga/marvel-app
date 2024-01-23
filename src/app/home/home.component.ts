import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../core/http-client/api.service';
import { tap } from 'rxjs';
import { CharacterDataWrapper as CharacterDataWrapperRes } from '../../core/data-access/db-data';
import {
  Character,
  CharacterDataWrapperResponse,
} from '../../core/model/marvel-model';
import { CharacterListComponent } from './character-list/character-list.component';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterListComponent,
    MarvelHeaderComponent,
    FilterComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

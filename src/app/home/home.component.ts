import { Component, inject } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/app.state';
import { isLoading } from '../store/shared/shared.selector';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../core/components/loader/loader.component';
import { BreadcumbComponent } from '../../core/components/breadcumb/breadcumb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterListComponent,
    MarvelHeaderComponent,
    FilterComponent,
    BreadcumbComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

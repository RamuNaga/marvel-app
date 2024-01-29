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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterListComponent,
    MarvelHeaderComponent,
    FilterComponent,
    RouterModule,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly store = inject(Store<Appstate>);
  readonly isLoading$ = this.store.select(isLoading);
}

import { Component } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';

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

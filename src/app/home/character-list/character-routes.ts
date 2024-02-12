import { Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const CHARACTER_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Characters' },
    children: [
      {
        path: '',
        component: CharacterListComponent,
      },
      {
        path: 'character/:id',
        component: CharacterDetailsComponent,
        data: { breadcrumb: 'Character' },
      },
    ],
  },
];

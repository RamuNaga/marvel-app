import { Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { ComicsListComponent } from './comics-list.component';

export const COMICS_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ComicsListComponent,
      },
    ],
  },
];

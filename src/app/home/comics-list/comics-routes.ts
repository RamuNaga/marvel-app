import { Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { ComicsListComponent } from './comics-list.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

export const COMICS_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Comics' },
    children: [
      {
        path: '',
        component: ComicsListComponent,
      },
      {
        path: 'comic/:id',
        component: ComicDetailsComponent,
        data: { breadcrumb: 'comic' },
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CharacterDetailsComponent } from './home/character-list/character-details/character-details.component';
import { CharacterListComponent } from './home/character-list/character-list.component';
import { characterResolver } from './home/character-list/data-access/resolvers/character.resolver';
import { ComicsListComponent } from './home/comics-list/comics-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'comics',
    loadChildren: () =>
      import('../app/home/comics-list/comics-routes').then(
        (comics) => comics.COMICS_ROUTES
      ),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('../app/home/character-list/character-routes').then(
        (character) => character.CHARACTER_ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

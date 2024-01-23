import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CharacterDetailsComponent } from './home/character-list/character-details/character-details.component';
import { CharacterListComponent } from './home/character-list/character-list.component';
import { characterResolver } from './home/character-list/data-access/resolvers/character.resolver';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
  {
    path: ':characterUrl',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CharacterListComponent,
      },
      {
        path: 'character/:id',
        component: CharacterDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

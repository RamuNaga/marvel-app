import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  API_KEY,
  API_URL,
  PRIVATE_KEY,
  PUBLIC_KEY,
} from '../core/http-client/api-url.token';
import { environment } from '../environments/environment';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { CharactersEffects } from './home/character-list/data-access/state/character-list/character-list.effects';
import { provideHttpClient } from '@angular/common/http';
import { CustomSerializer } from './store/router/custom-serializer';
import { provideComponentStore } from '@ngrx/component-store';
import { ComicListStoreService } from './home/comics-list/data-access/comic-list-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideComponentStore(ComicListStoreService),
    provideAnimations(),
    { provide: API_URL, useValue: environment.api_url },
    { provide: PUBLIC_KEY, useValue: environment.public_key },
    { provide: PRIVATE_KEY, useValue: environment.private_key },
    { provide: API_KEY, useValue: environment.api_key },
    provideStore(appReducer),
    provideEffects([CharactersEffects]),
    provideRouterStore({ serializer: CustomSerializer }),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

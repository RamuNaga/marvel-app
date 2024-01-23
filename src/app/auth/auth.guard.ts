import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService)
    .isAuthenticated()
    .pipe(
      tap((authenticated) => {
        if (!authenticated) {
          return inject(Router).navigate(['/login']);
        }
        return authenticated;
      })
    );
};

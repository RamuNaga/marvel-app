import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticated = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticated.asObservable();
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  isAuthenticated() {
    return this.httpClient.get<boolean>('api/auth').pipe(
      tap((data) => {
        this.authenticated.next(data);
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

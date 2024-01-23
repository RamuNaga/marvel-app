import { Injectable, inject } from '@angular/core';
import { CreateUserInput } from '../model/create-user-input';
import { ApiService } from '../../../core/http-client/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiService = inject(ApiService);
  login(loginRequest: CreateUserInput) {
    return this.apiService.post('api/auth/login', loginRequest);
  }
}

import { Component, inject } from '@angular/core';
import { AuthComponent } from '../auth.component';
import { CreateUserInput } from '../model/create-user-input';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService],
})
export class LoginComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  login(createUserData: CreateUserInput) {
    this.router.navigate(['/']);
    // this.loginService.login(createUserData).subscribe(() => {
    //   this.router.navigate(['/home']);
    // });
  }
}

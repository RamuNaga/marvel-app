import { Component } from '@angular/core';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUp(event: any) {}
}

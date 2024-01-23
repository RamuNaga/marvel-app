import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-loader',
  template: `<div><mat-spinner></mat-spinner></div>`,
  styleUrls: ['./loader.component.scss'],
  imports: [MatProgressSpinnerModule],
})
export class LoaderComponent {}

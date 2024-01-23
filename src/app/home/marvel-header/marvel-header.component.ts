import { CommonModule } from '@angular/common';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { Observable, debounceTime, map, startWith, tap } from 'rxjs';
import { Appstate } from '../../store/app.state';
import { CharacterService } from '../character-list/data-access/services/character.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marvel-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './marvel-header.component.html',
  styleUrl: './marvel-header.component.scss',
})
export class MarvelHeaderComponent implements OnInit {
  searchStr = '';
  searchForm = this.fb.nonNullable.group({
    searchvalue: '',
  });
  private readonly store = inject(Store<Appstate>);

  private characterService = inject(CharacterService);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm
      .get('searchvalue')
      ?.valueChanges.pipe(
        debounceTime(1000),
        tap((searchstr) => {
          this.characterService.sendSearchString(searchstr.toLowerCase());
        })
      )
      .subscribe();
  }

  onSearchSubmit() {
    //this.searchStr = this.searchForm.value.searchvalue || '';
  }
}

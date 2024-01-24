import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Character } from '../../../../core/model/marvel-model';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-character-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './character-dialog.component.html',
  styleUrl: './character-dialog.component.scss',
})
export class CharacterDialogComponent {
  form: FormGroup;
  name: string;
  path: string;
  extension: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { name, thumbnail }: Character
  ) {
    this.name = name;
    this.path = thumbnail.path;
    this.extension = thumbnail.extension;

    this.form = fb.group({
      name: [name, Validators.required],
      path: [thumbnail.path],
      extension: [thumbnail.extension],
    });
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

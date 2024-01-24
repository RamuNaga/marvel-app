import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../../../core/model/marvel-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatIconModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  @Input() character: Character | undefined;

  imgurl: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.imgurl =
      this.character?.thumbnail.path +
      '.' +
      this.character?.thumbnail.extension;
  }

  editCourse({ name, thumbnail }: Character) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name,
      thumbnail,
    };

    const dialogRef = this.dialog.open(CharacterDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((val) => {
      if (this.character) {
        this.character.name = val.name;
        this.character.thumbnail.path = val.path;
        this.character.thumbnail.extension = val.extension;
      }
    });
  }
}

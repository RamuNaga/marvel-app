import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../../../core/model/marvel-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';
import { filter } from 'rxjs';
import { getImageUrl } from '../../../../core/util/image-url';
import { isPublicKeyExist } from '../../../../core/util/time-stamp';

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
    if (this.character) {
      this.imgurl = getImageUrl(this.character);
    }
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

    dialogRef
      .afterClosed()
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        if (this.character && !isPublicKeyExist()) {
          this.character.name = val.name;
          this.character.thumbnail.path = val.path;
          this.character.thumbnail.extension = val.extension;
          this.imgurl = getImageUrl(this.character);
        }
      });
  }
}

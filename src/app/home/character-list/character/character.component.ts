import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../../../core/model/marvel-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  @Input() character: Character | undefined;

  imgurl: string = '';

  ngOnInit(): void {
    this.imgurl =
      this.character?.thumbnail.path +
      '.' +
      this.character?.thumbnail.extension;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Comic } from '../../../../core/model/marvel-model';
import { getImageUrl } from '../../../../core/util/image-url';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [MatCardModule, RouterModule, MatIconModule, NgIf],
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss',
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  imgurl: string = '';

  ngOnInit(): void {
    if (this.comic) {
      this.imgurl = getImageUrl(this.comic);
    }
  }
  editComic(comic: Comic) {}
}

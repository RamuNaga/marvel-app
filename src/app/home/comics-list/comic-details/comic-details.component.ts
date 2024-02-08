import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ComicListStoreService } from '../data-access/comic-list-store';
import { Comic } from '../../../../core/model/marvel-model';
import { AsyncPipe, NgIf } from '@angular/common';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-comic-details',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './comic-details.component.html',
  styleUrl: './comic-details.component.scss',
})
export class ComicDetailsComponent implements OnInit {
  private id!: number;
  comic$!: Observable<Comic | undefined>;

  private route = inject(ActivatedRoute);
  private readonly comicListStoreService = inject(ComicListStoreService);

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => (this.id = params['id'])))
      .subscribe();

    this.comicListStoreService.fetchComicById(this.id);

    this.comic$ = this.comicListStoreService.selectComic(this.id);
  }
}

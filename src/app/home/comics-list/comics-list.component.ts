import { Component, inject } from '@angular/core';
import { ComicListStoreService } from './data-access/comic-list-store';
import { LoaderComponent } from '../../../core/components/loader/loader.component';
import { ComicComponent } from './comic/comic.component';
import { Appstate } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { isLoading } from '../../store/shared/shared.selector';
import { AsyncPipe } from '@angular/common';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-comics-list',
  standalone: true,
  imports: [LoaderComponent, ComicComponent, AsyncPipe],
  providers: [provideComponentStore(ComicListStoreService)],
  templateUrl: './comics-list.component.html',
  styleUrl: './comics-list.component.scss',
})
export class ComicsListComponent {
  private readonly comicListStoreService = inject(ComicListStoreService);
  private readonly store = inject(Store<Appstate>);
  comics$ = this.comicListStoreService.comics$;

  readonly isLoading$ = this.store.select(isLoading);
}

import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  ComicSummary,
  EventSummary,
  SeriesSummary,
  StorySummary,
} from '../../../../core/model/marvel-model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-accordion',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './details-accordion.component.html',
  styleUrl: './details-accordion.component.scss',
})
export class DetailsAccordionComponent {
  @Input() title: string = '';

  @Input() summaryList:
    | StorySummary[]
    | ComicSummary[]
    | EventSummary[]
    | SeriesSummary[] = [];
}

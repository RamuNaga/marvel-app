import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Observable, distinctUntilChanged, filter } from 'rxjs';
import {
  Breadcrumb,
  BreadcrumbService,
} from '../../services/breadcrumb.service';

export type IBreadCrumb = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-breadcumb',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, AsyncPipe],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss',
})
export class BreadcumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;
  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}

import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcumbService } from '../../services/breadcumb.service';

@Component({
  selector: 'app-breadcumb',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss',
})
export class BreadcumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private breadcrumbService: BreadcumbService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    console.log('this.breadcrumbs ==', this.breadcrumbs);
  }
}

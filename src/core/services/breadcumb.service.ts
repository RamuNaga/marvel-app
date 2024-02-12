import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';

export type BreadCumb = {
  label: string;
  url: string;
};

@Injectable({
  providedIn: 'root',
})
export class BreadcumbService {
  breadcrumbs: Array<BreadCumb> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<BreadCumb> = []
  ): Array<BreadCumb> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      //console.log('child', child);
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      if (routeURL && routeURL !== '') {
        //console.log('routeURL', routeURL);
        url += `/${routeURL}`;
      }
      if (child.snapshot.data['breadcrumb'] != undefined) {
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'],
          url: url,
        });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    //console.log('breadcrumbs:===', breadcrumbs);
    return breadcrumbs;
  }
}

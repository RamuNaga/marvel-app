import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

export const characterResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state
) => {
  return true;
};

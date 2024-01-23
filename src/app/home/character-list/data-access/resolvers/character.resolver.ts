import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

export const characterResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state
) => {
  console.log('id====', route.params['id']);
  return true;
};

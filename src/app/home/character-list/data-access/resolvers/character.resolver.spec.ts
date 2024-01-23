import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { characterResolver } from './character.resolver';

describe('characterResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => characterResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

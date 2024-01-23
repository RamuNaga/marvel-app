import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private subject = new Subject<string>();

  sendSearchString(serchStr: string) {
    this.subject.next(serchStr);
  }

  receivedSearchString(): Observable<string> {
    return this.subject.asObservable();
  }
}

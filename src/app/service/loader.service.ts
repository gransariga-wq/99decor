import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject = new BehaviorSubject<boolean>(false);
  loading$ = this.subject.asObservable();

  constructor() { }

  show() {
    console.log('LOADER SHOW');
    this.subject.next(true);
  }

  hide() {
    console.log('LOADER HIDE');
    this.subject.next(false);
  }
}

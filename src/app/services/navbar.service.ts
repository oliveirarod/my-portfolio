import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  get isMenuOpen(): boolean {
    return this.isMenuOpenSubject.value;
  }

  set isMenuOpen(value: boolean) {
    this.isMenuOpenSubject.next(value);
    this.handleScrollbarVisibility();
  }

  constructor() {}

  handleScrollbarVisibility() {
    this.isMenuOpen
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = '');
  }
}

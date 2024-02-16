import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  isMenuOpen: boolean = false;
  @ViewChild('navbarMenu') navbarMenu!: ElementRef<HTMLDivElement>;

  @Output() onMenuClick = new EventEmitter<boolean>();

  constructor() {}

  emitMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.animateMenu();

    this.onMenuClick.emit(this.isMenuOpen);
  }

  animateMenu() {
    const menu = this.navbarMenu.nativeElement;

    menu.classList.contains('menu')
      ? (menu.className = 'close')
      : (menu.className = 'menu');

    this.isMenuOpen
      ? document.documentElement.style.overflow = 'hidden'
      : document.documentElement.style.overflow = '';
  }
}

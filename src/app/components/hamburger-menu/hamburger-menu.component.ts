import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
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

  @HostListener('window:resize')
  onResize() {
    if (this.isMenuOpen && window.innerWidth > 768) {
      this.emitMenuChange();
    }
  }

  constructor() {}

  emitMenuChange() {
    this.isMenuOpen = !this.isMenuOpen;
    this.animateMenu();

    this.onMenuClick.emit(this.isMenuOpen);
  }

  animateMenu() {
    const menu = this.navbarMenu.nativeElement;
    const isOpen = menu.classList.contains('menu');

    menu.classList.toggle('close', isOpen);
    menu.classList.toggle('menu', !isOpen);

    this.hideScrollbar();
  }

  hideScrollbar() {
    this.isMenuOpen
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = '');
  }
}

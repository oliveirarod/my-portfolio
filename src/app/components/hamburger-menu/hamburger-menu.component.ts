import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  @ViewChild('hamburgerMenu') hamburgerMenu!: ElementRef<HTMLDivElement>;

  isMenuOpen!: boolean;

  @HostListener('window:resize')
  onResize() {
    if (this.isMenuOpen && window.innerWidth > 768) {
      this.emitMenuChange();
    }
  }

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.subscribeToIsMenuOpen();
  }

  subscribeToIsMenuOpen() {
    this.navbarService.isMenuOpen$.subscribe((isMenuOpen) => {
      if (this.isMenuOpen !== isMenuOpen) {
        this.animateMenu();
      }
      this.isMenuOpen = isMenuOpen;
    });
  }

  emitMenuChange() {
    this.navbarService.isMenuOpen = !this.navbarService.isMenuOpen;
  }

  animateMenu() {
    if (!this.hamburgerMenu) return;

    const menuClassList = this.hamburgerMenu.nativeElement.classList;
    const isOpen = menuClassList.contains('menu');

    menuClassList.toggle('close', isOpen);
    menuClassList.toggle('menu', !isOpen);
  }
}

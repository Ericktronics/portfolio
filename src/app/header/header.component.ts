import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  @ViewChild('menu', { static: false }) menuRef!: ElementRef;

  constructor(private eRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.menuOpen &&
      this.menuRef &&
      !this.menuRef.nativeElement.contains(event.target) &&
      !this.eRef.nativeElement
        .querySelector('.header__hamburger')
        .contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

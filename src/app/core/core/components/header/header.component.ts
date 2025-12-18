import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = false;
  openMenu: string | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSub(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

}

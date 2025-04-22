import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {

  
  isScrolled = false;
  enquiry_form: any
  constructor(private router: Router,){  }

  show_small_menu = false
  toggleNav() {
    this.show_small_menu = !this.show_small_menu
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
  
}

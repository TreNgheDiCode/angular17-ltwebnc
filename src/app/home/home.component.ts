import { Component } from '@angular/core';
import { NavbarComponent } from '../components/nav-bar.component';
import { HomeCarousel } from '../components/carousel/carousel.component';
import { FooterComponent } from '../components/footer-component';

@Component({
  selector: 'HomePage',
  templateUrl: './home.component.html',
  standalone: true,
  template: `Home Page`,
  imports: [NavbarComponent, HomeCarousel, FooterComponent],
})
export class HomeComponent {}

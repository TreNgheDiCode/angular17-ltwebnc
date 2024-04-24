import { Component } from '@angular/core';
import { NavbarComponent } from '../components/nav-bar.component';
import { HomeCarousel } from '../components/carousel/carousel.component';

@Component({
  selector: 'HomePage',
  templateUrl: './home.component.html',
  standalone: true,
  template: `Home Page`,
  imports: [NavbarComponent, HomeCarousel],
})
export class HomeComponent {}

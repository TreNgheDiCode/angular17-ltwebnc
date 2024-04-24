import { Component } from '@angular/core';
import { NavbarComponent } from '../components/nav-bar.component';

@Component({
  selector: 'HomePage',
  templateUrl: './home.component.html',
  standalone: true,
  template: `Home Page`,
  imports: [NavbarComponent],
})
export class HomeComponent {}

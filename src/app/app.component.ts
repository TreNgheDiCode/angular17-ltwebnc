import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HotelInventoryApp';
}

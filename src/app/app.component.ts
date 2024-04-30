import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

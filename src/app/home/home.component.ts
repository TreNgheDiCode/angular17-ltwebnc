import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { HomeCarousel } from '../components/carousel/carousel.component';
import { FooterComponent } from '../components/footer-component';
import { NavbarComponent } from '../components/nav-bar.component';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'HomePage',
  templateUrl: './home.component.html',
  standalone: true,
  template: `Home Page`,
  imports: [NavbarComponent, HomeCarousel, FooterComponent],
})
export class HomeComponent implements OnInit {
  firestore = inject(Firestore);
  products?: Product[];
  hasProduct: boolean = false;

  constructor() {}

  ngOnInit(): void {
    getDocs(collection(this.firestore, 'products')).then((res) => {
      this.products = res.docs.map((doc) => doc.data());
      this.hasProduct = true;
    });
  }
}

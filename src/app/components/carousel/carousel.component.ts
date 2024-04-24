import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'HomeCarousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  imports: [CarouselModule, NgOptimizedImage, ButtonModule, FontAwesomeModule],
})
export class HomeCarousel {
  cartShoppingIcon = faCartShopping;

  products = [
    {
      image: 'assets/products/1.png',
      label: 'Xe đạp địa hình AM-170',
      description:
        'Mẫu xe mới này hổ trợ rất tốt cho việc chạy đường dài và đi những con đường khó đi.Phù hợp với những ai cao từ 170cm trở lên',
    },
    {
      image: 'assets/products/2.png',
      label: 'Xe đạp địa hình BM-140',
      description:
        'Mẫu xe mới này hổ trợ rất tốt cho các bé việc chạy đường dài và đi những con đường khó đi.Phù hợp với những bé cao từ 140cm trở lên',
    },
    {
      image: 'assets/products/3.png',
      label: 'Xe đạp địa hình CM-080',
      description:
        'Mẫu xe mới này dành cho những cô cậu bé nhỏ hổ trợ rất tốt cho bé tập chạy xe đạp .Phù hợp với những ai cao từ 80cm trở lên',
    },
  ];
}

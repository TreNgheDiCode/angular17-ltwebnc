import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'FooterComponent',
  standalone: true,
  template: `
    <footer class="bg-gray-400 py-8">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div class="space-y-4">
          <img ngSrc="assets/logo.png" alt="logo" width="122" height="47" />
          <h1 class="text-white font-bold text-2xl">Bicycle Shop</h1>
          <p class="text-black font-semibold text-lg">Thông tin liên lạc:</p>
          <ul class="list-disc list-inside">
            <li class="text-black text-base">Email: xedap&#64;gmail.com</li>
            <li class="text-black text-base">Số điện thoại: 0123456789</li>
            <li class="text-black text-base">
              Địa chỉ: 828 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ Chí Minh,
              Việt Nam
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.3711237946!2d106.669689!3d10.758699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e752f2196a9%3A0x645dbc359ee1dcba!2zVGnhu4dtIHhlIMSR4bqhcCB0aOG7gyB0aGFvIMSQ4buZcCBXb3Jrc2hvcA!5e0!3m2!1svi!2sus!4v1713999591300!5m2!1svi!2sus"
          style="border:0;"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="space-y-4">
          <h1 class="text-black font-semibold text-lg">Về chúng tôi</h1>
          <p class="text-black text-base">
            Bicycle Shop là cửa hàng xe đạp uy tín hàng đầu tại Việt Nam. Chúng
            tôi cung cấp các sản phẩm chất lượng với giá cả phải chăng.
          </p>
        </div>
      </div>
    </footer>
  `,
  imports: [NgOptimizedImage],
})
export class FooterComponent {}

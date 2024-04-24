import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Navbar',
  standalone: true,
  template: `
    <nav
      class="mx-auto container h-16 flex items-center justify-between gap-16"
    >
      <img [ngSrc]="logoUrl" alt="logo" width="122" height="47" />
      <div class="flex flex-1 items-center gap-2">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          class="w-full p-3 text-lg outline-none border-b-[3px] border-b-blue-500"
        />
        <button class="border-2 border-black px-4 py-1 !rounded-lg">
          <fa-icon [icon]="faMagnifyingGlass" class="text-xl"></fa-icon>
        </button>
      </div>
      <div class="flex gap-4 h-full">
        <a
          routerLink="login"
          class="flex items-center justify-center flex-col text-lg h-full relative group"
          >Đăng nhập
          <div
            class="hidden h-1 w-full bg-blue-500 absolute bottom-0 group-hover:block group-hover:animate-pulse"
          ></div>
        </a>
        <a
          routerLink="register"
          class="flex items-center justify-center flex-col text-lg h-full relative group"
          >Đăng ký
          <div
            class="hidden h-1 w-full bg-blue-500 absolute bottom-0 group-hover:block group-hover:animate-pulse"
          ></div>
        </a>
      </div>
    </nav>
  `,
  imports: [NgOptimizedImage, FontAwesomeModule, RouterLink],
})
export class NavbarComponent {
  logoUrl = 'assets/logo.png';
  faMagnifyingGlass = faMagnifyingGlass;
}

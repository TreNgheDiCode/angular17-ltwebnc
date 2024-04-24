import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Xe đạp địa hình, thể thao tốt nhất | Bicycle Shop',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Đăng nhập',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Đăng ký',
    component: RegisterComponent,
  },
];

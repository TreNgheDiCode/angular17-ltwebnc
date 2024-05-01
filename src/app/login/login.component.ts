import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LoginForm } from './login-form.component';

@Component({
  selector: 'LoginPage',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [NgOptimizedImage, LoginForm],
})
export class LoginComponent {
  image = 'assets/login.png';
}

import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterForm } from './register-form.component';

@Component({
  selector: 'RegisterPage',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [NgOptimizedImage, RegisterForm],
})
export class RegisterComponent {
  image = 'assets/register.png';
}

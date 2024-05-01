import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'LoginForm',
  standalone: true,
  templateUrl: './login-form.component.html',
  imports: [
    InputTextModule,
    ButtonModule,
    RouterLink,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
  ],
})
export class LoginForm {
  value!: string;
  values = {};
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    this.values = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(this.values);
  }
}

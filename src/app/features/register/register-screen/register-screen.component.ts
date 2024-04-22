import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css'
})
export class RegisterScreenComponent {

  showPassword = false;
  showConfirmPassword = false;
  icon:string = 'bi-eye-fill';
  iconConfirmPassword:string = 'bi-eye-fill'

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  register() {
    throw new Error('Method not implemented.');
    }

  toggleVisibility(field: 'password' | 'confirmPassword') {
  if (field === 'password') {
    this.showPassword = !this.showPassword;
  } else if (field === 'confirmPassword') {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  if(this.showPassword) {
    this.icon = 'bi-eye-slash-fill';
  } else {
    this.icon = 'bi-eye-fill';
  }

  if(this.showConfirmPassword) {
    this.iconConfirmPassword = 'bi-eye-slash-fill';
  } else {
    this.iconConfirmPassword = 'bi-eye-fill';
  }

}

}

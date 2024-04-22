import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { matchPassword, strongPassword } from '../../../validators/validators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';

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

  constructor(private service: AuthService, private toastr: ToastrService, private router: Router, public formService: FormService) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), strongPassword()]),
    passwordConfirmation: new FormControl('', Validators.required),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required)
  }, { validators: matchPassword() });

  register() {
    this.service.register(this.registerForm.value).subscribe({
      next: (response:any) => {
        this.toastr.success(response.message, '');
        this.router.navigate(['/entrar']);
      },
      error: (error:any) => {
        this.toastr.error('Falha ao registrar usuário.', '');
        console.log(error.message);
      }
    });
    console.log(this.registerForm.value)
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

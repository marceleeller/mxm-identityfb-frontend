import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const FB: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

loginForm!: FormGroup;
showPassword = false;
icon:string = 'bi-eye-fill';

constructor(
  private router: Router,
  private service: AuthService,
  private _ngZone: NgZone,
  private fb: FormBuilder
  ) {}

ngOnInit() {
  this.createForm();
}

createForm() {
  this.loginForm = this.fb.group({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })
}

async login() {

  FB.login(async (result:any) => {
    await this.service.LoginWithFacebook(result.authResponse.accessToken).subscribe(
      (x:any) => {
        this._ngZone.run(() => {
          this.router.navigate(['/home']);
        })},
      (error:any) => {
        console.log(error);
      }
    );
  }, {scope: 'email' })
}

togglePassword() {
  this.showPassword = !this.showPassword;
  if (this.showPassword) {
    this.icon = 'bi-eye-slash-fill'
  } else {
    this.icon = 'bi-eye-fill'
  }
}

}

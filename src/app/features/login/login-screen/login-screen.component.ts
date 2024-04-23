declare var google:any;

import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CredentialResponse } from 'google-one-tap';

declare const FB: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent implements OnInit{

showPassword = false;
icon:string = 'bi-eye-fill';

constructor(
  private router: Router,
  private service: AuthService,
  private _ngZone: NgZone,
  private toastr: ToastrService
  ) {}

loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
});

ngOnInit() {
  google.accounts.id.initialize({
    client_id: '545266552688-0f6d5sicdmae46ptall2eiova5k2h1ck.apps.googleusercontent.com',
    callback: this.handleCredentialResponse.bind(this),
    auto_select: false,
    cancel_on_tap_outside: true
  })

  google.accounts.id.renderButton(document.getElementById('google-btn'), {
    theme: 'filled_white',
    size: 'large',
    shape: 'rectangle',
    text: 'continue_with'
  });
}

login() {
    this.service.login(this.loginForm.value).subscribe({
      next: (response:any) => {
        this.toastr.success(response.message, '');
        this.service.storeToken(response.tokenResponse.token);
        this.router.navigate(['/principal']);
      },
      error: (error:any) => {
        this.toastr.error(error.error, '');
      }
    })
}

async loginFacebook() {

  FB.login(async (result:any) => {
    await this.service.LoginWithFacebook(result.authResponse.accessToken).subscribe(
      (response:any) => {
        this.toastr.success(response.message, '');
        this.service.storeToken(response.tokenResponse.token);
        this._ngZone.run(() => {
          this.router.navigate(['/principal']);
        }
      )},
      (error:any) => {
        this.toastr.error(error.error, '');
      }
    );
  }, {scope: 'email' })
}

async handleCredentialResponse(response: CredentialResponse) {
  await this.service.LoginWithGoogle(response.credential).subscribe(
    (x: any) => {
      this.toastr.success(x.message, '');
      localStorage.setItem('token', x.tokenResponse.token);
      this._ngZone.run(() => {
        this.router.navigate(['/principal']);
    })},
    (error:any) => {
      this.toastr.error(error.error, '');
    }
  );
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

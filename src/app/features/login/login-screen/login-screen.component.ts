import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare const FB: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

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

login() {
    this.service.login(this.loginForm.value).subscribe({
      next: (response:any) => {
        this.toastr.success(response.message, '');
        this.service.storeToken(response.tokenResponse.token);
        this.router.navigate(['/home']);
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
          this.router.navigate(['/home']);
        }
      )},
      (error:any) => {
        this.toastr.error(error.error, '');
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

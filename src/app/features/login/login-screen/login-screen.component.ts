import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

declare const FB: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {


constructor(
  private router: Router,
  private service: AuthService,
  private _ngZone: NgZone
  ) {}

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

test() {
  this.service.test().subscribe(
    response => {
      console.log('Success!', response);
    },
    error => {
      console.error('Error!', error);
    }
  );
}

}

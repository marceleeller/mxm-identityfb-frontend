import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  constructor(private router: Router, private service: AuthService, private _ngZone: NgZone) { }

logout() {
  this.service.signOutExternal();
  this._ngZone.run(() => {
    this.router.navigate(['/']);
  });
}

}

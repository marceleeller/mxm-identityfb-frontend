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

  headerStyle:object = {
    'background-color': 'white',
    'border': '1px solid gray',
  };

  bgHeaderStyle: object = {
    'background-color': '#F5F5F5',
  };


logout() {
  this.service.signOutExternal();
  this._ngZone.run(() => {
    this.router.navigate(['/']);
  });
}

}

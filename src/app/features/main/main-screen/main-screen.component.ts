import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  firstName!:string;
  lastName!:string;

  constructor(private router: Router, private service: AuthService, private _ngZone: NgZone, private userService: UserService) { }

  ngOnInit() {
    this.getUserData();
  }

  headerStyle:object = {
    'background-color': 'white',
    'border': '1px solid gray',
  };

  bgHeaderStyle: object = {
    'background-color': '#F5F5F5',
  };

  getUserData() {
    this.userService.getUserData().subscribe((data:any) => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    });
  }


  logout() {
    this.service.signOutExternal();
    this._ngZone.run(() => {
      this.router.navigate(['/']);
    });
  }

}

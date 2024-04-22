import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-screen',
  templateUrl: './privacy-screen.component.html',
  styleUrl: './privacy-screen.component.css'
})
export class PrivacyScreenComponent {

  headerStyle:object = {
    'background-color': 'white',
    'border': '1px solid gray',
  };

  bgHeaderStyle: object = {
    'background-color': '#F5F5F5',
  };
}

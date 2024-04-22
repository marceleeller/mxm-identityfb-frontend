import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  onlyCharacters(event:any):void {
    const pattern = /[a-zA-Z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {

    event.preventDefault();
    }
  }
}

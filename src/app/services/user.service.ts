import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl:string = 'https://localhost:7245/api'

  constructor(private httpClient: HttpClient) { }

  getUserData(): any {
    return this.httpClient.get(`${this.apiUrl}/user`)
  }
}

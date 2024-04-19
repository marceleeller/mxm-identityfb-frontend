import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl:string = 'https://localhost:7245/api'

  constructor(private httpClient: HttpClient) { }

  public signOutExternal= () => {
    localStorage.removeItem('token');
    console.log("token deleted")
  }

  LoginWithFacebook(credentials: any): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(`${this.apiUrl}/auth/loginWithFacebook`, JSON.stringify(credentials), { headers: header, withCredentials: true });
  }

  test(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/test`);
  }


}

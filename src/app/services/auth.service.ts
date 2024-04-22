import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl:string = 'https://localhost:7245/api'

  constructor(private httpClient: HttpClient) { }

  public signOutExternal= () => {
    localStorage.clear();
    console.log("token deleted")
  }

  register(data:any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/auth/register`, data).pipe(first())
  }

  login(data:any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, data).pipe(first())
  }

  LoginWithFacebook(credentials: any): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(`${this.apiUrl}/auth/loginWithFacebook`, JSON.stringify(credentials), { headers: header, withCredentials: true });
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }

}


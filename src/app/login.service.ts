import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logIn(data): Observable<any> {
    return this.http.get('http://192.168.1.122:1337/user/login/verify')
  }
}

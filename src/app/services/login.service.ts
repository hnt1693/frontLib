import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Const;
  API = 'http://localhost:8080/auth/login';
  API_REGISTER = 'http://localhost:8080/auth/register';
  constructor(private http: HttpClient) {
  }

  public login(account: User): Observable<any> {
    return this.http.post<any>(this.API, account);
  }
  public register(account: User): Observable<any> {
    return this.http.post<any>(this.API_REGISTER, account);
  }
}

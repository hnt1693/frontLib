import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  API_ROLE = 'http://localhost:8080/help/roles';

  constructor(private http: HttpClient) {
  }

  getAllRole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.API_ROLE);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

// replace the url with server url to fetch data from
  private url = "/assets/usersData.json";

  constructor( private http: HttpClient) { }

  getUsers(): Observable<AppUsers[]>{
    return this.http.get<AppUsers[]>(this.url);
  }
}

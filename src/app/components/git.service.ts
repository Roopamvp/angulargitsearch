import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/users?q=${query}`);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }
}

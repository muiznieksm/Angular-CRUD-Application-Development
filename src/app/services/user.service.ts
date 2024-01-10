import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3001/user'; // Define the API URL just once

  constructor(private _http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/${id}`, data);
  }

  getUserList(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}`);
  }

  getUserById(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3001/user/${id}`);
  }
}

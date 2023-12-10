import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'https://freetestapi.com/api/v1/cats'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) { }

  getCats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
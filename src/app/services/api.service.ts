import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cat} from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  getRandomCatImage(): Observable<Cat> {
    return this.http.get<Cat>(this.baseUrl + 'images/search');
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'categories');
  }

  getCatImagesByCategory(selectedCategory: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'images/search?category_ids=' + selectedCategory + '&limit=10');
  }
}

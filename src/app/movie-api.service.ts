import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

const API_BASE = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(`${API_BASE}/movies`);
  }

  getCollection() {
    return this.http.get<Movie[]>(`${API_BASE}/collection`);
  }

  addToCollection(body: Movie) {
    return this.http.post(`${API_BASE}/collection`, body);
  }
}

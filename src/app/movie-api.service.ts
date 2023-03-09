import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(`http://localhost:3000/movies`);
  }
}

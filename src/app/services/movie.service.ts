import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres, TheMovie } from '../interfaces/movies.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrlMovies = `${environment.development.apiUrlMovies}?api_key=${environment.development.apiKey}`;
  private apiUrlGenres = `${environment.development.apiUrlGenres}?api_key=${environment.development.apiKey}`;
  private http = inject(HttpClient);

  getMovies(): Observable<TheMovie> {
    return this.http.get<TheMovie>(this.apiUrlMovies);
  }

  getGenres(): Observable<Genres> {
    return this.http.get<Genres>(this.apiUrlGenres);
  }
}

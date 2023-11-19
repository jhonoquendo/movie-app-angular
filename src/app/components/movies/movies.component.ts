import { Component, OnInit } from '@angular/core';
import { Genres, Result } from '../../interfaces/movies.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: Result[] = [];
  genres: Genres = { genres: [] };
  filterMovie = '';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadItems();
    this.loadGenres();
  }

  loadItems() {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }

  loadGenres() {
    this.movieService.getGenres().subscribe((response) => {
      this.genres = response;
      this.movies.forEach((movie) => {
        movie.genre_names = movie.genre_ids.map(
          (id: number) =>
            this.genres.genres.find((genre) => genre.id === id)?.name!
        );
      });
    });
  }
}

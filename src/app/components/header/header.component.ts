import { Component } from '@angular/core';
import { Result } from '../../interfaces/movies.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private movieService: MovieService){}

  // filtrar() {
  //   this.movieService.cambiarFiltro(this.search);
  // }

  // filterMovies() {
  //   this.filteredMovies = this.movies.filter(
  //     (movie) => movie.title.toLowerCase().includes(this.search.toLowerCase()) //|| // Filtrar por nombre de película
  //     // movie.genre_names.some((genre: string) =>
  //     //   genre.toLowerCase().includes(this.search.toLowerCase())
  //     // )
  //     // Filtrar por género
  //   );
  // }
}

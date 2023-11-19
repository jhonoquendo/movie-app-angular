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
}

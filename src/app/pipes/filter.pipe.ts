import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultMovies = [];
    for (const movie of value) {
      movie.genre_names?.map((genre: string) => {
        if (genre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultMovies.push(movie);
        }
      });

      if (movie.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultMovies.push(movie);
      }
    }

    let uniqueMovies = resultMovies.filter(
      (movie, index, self) =>
        index === self.findIndex((m) => m.title === movie.title)
    );

    return uniqueMovies;
  }
}

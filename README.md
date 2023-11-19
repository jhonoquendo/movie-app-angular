# MoviesAppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Estructura del proyecto

En el proyecto se crearon directorios diferentes para separar las tareas especificas, se crearon los siguientes directorios: 

- components -> se crean componentes para ser reutilizados mas adelante.
- data -> se creó este directorio por si se desea importar la data directamente y ya no hacer llamada a la api externa
- interfaces - > se crea el directorio para poder tipar las variables, etc.
- pipes -> se crea para una tarea especifica en este caso es para filtrar las peliculas por titulo y genero.
- services -> se encarga de hacer las llamadas a la api mediante httpClient de angular

## Environment

Para ejecutar el proyecto de forma local se debe crear src/environment/environment.ts

y agregar los siguientes valores: 

```
export const environment = {
  production: {},
  development: {
    apiUrlMovies:
      'https://api.themoviedb.org/3/movie/popular',
    apiUrlGenres:
      'https://api.themoviedb.org/3/genre/movie/list',
      apiKey: '8f6ac44cf1e5987a234187eeaf0311d5'
  },
};
```


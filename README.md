#  ![Screenshot](./src/favicon.ico) Earthquake App

It is real time Earthquakes Application using [GeoNames](https://www.geonames.org/) API's.

An earthquake is the sudden movement of the Earth's tectonic plates, resulting in shaking of the ground.

[Let's View Live !!](https://kprokkie.github.io/earthquake-app/)

## App Folder Structure

- Views: `[EarthquakesComponent, ErrorComponent]`
- Components: `[BannerComponent, CardComponent, MapComponent, HeaderComponent, FooterComponent]`
- Interfaces: `[Earthquake, Map]`
- Resolvers: `[EarthquakesResolver]`
- Services: `[HttpService]`
- NgRx: `[Actions, Reducers, Selectors, Effects]`

## About Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## How to run project locally

* Clone the code repository `git clone https://github.com/kprokkie/earthquake-app.git`
* Run `npm install` to dowload the project dependencies.
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`

The app will automatically reload if you change any of the source files.

## How to build project for deployement

* Run `ng build` to build the project. 

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy project to github pages

* git checkout -b gh-pages
* git push origin gh-pages
* npm install -g angular-cli-ghpages
* ng build --prod --base-href https://[username].github.io/[repo]/
* ngh --dir=dist/[project-name]

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


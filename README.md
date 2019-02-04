# This Fork
This fork was taken of John Papa's repo to use in a short introduction to BDD and Cucumber with Angular.
The major changes are the inclusion of Cucumber feature tests and the ability to run them using Protractor.

## Changes made to get cucumber up and running
* Install dependencies as per https://www.amadousall.com/angular-e2e-with-cucumber/
    * `npm install --save @types/{chai,cucumber} chai cucumber protractor-cucumber-framework`
* Update configuration to use cucumber instead of Jasmine
# Getting Started

Super simple Angular app with 1 module and 2 routes. This is a minor variation on the Tour of Heroes I wrote for the [official docs](https://angular.io/tutorial).

## Get the Code
```
git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh
cd toh
npm i
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.


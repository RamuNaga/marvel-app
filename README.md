# MarvelApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

### Name: Ramu Vuppanapalli

### ProjectName: Marvel Application

### This project is developed in latest Angular v17, rxjs and NGRX

### clone url : https://github.com/RamuNaga/marvel-app.git

#### Standalone components

I have used only standalone components. You won't see any modules in the app.

## Functionality overview

**General functionality:**
Display a list of all characters in the home page.
The user can click on a character image and go to a view with more details about the
record.
Include the following details of each character:
a. name, description, image;
b. a list of stories, events and/or series that the character appears in.
c. Include a free text search on the main page that filters the characters by name,
without relying on the Marvel API
d. user click on edit icon in each character, open model popup to edit the name and image.

**The general page breakdown looks like this:**

- Home page (URL: /characters )

  - List of Characters both mock data and Marvel API.

- Sign up/Login pages (URL: /login, /signup )

- Character page (URL: /characters/character/1011334 )

**environment**
In the environment.ts we need to update the following keys:

- api_key: '',
- api_url: 'http://gateway.marvel.com',
- public_key: '',
- private_key: '',

## Commands

`npm install` commands helps to install dependencies, devdependencies for the Marvel Application

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

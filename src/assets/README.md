# HellBasicAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

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


## Architecture Summary
Angular app -- One or more modules
Module --One or more components and services
Components -- html + class[logic]
Service --Business logic
Modules interact and ultimately render the view in the browser

## work flow
package.json contains dependencies and dev dependencies which required
from here only modules installed in node modules

Main.ts file-- entry point to our angular application
app.module--root module | app.component--root component

ng serve --> main.ts -->  there bootstrapModule(AppModule) will kickstart the app module -->  bootstrap: [AppComponent] kickstart --> App component contains app.html + app.class[logic][.ts file]

## Component
component consist of three parts 
[template]-->{view}[created using--HTML]
[class]  --> {code}[Typescript | Data & methods]
[Metadata] --> {Information}--to decide that wheahter its a angular component or just a regular class--> its defined using [Decorator] which is a feature in typescript
[Decorator] is nothing but a function which provides info about the class attached to its.

## Interpolation
its basically binding data from the class to the template


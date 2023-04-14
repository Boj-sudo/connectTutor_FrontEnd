# connectTutor Web API
### To be able to run the system fully, you need to have the following in your windows machine:
1.  Database -> SQL Server [SSMS - SQL Server Management Studio] 
2.  BackEnd -> .NET Web API
3.  FrontEnd -> Angular 15

### The system compose of three different types of users which are:
1. Admin
2. Tutor
3. Student

Admin and Tutor cannot register to our system but rather can be added to the system, only the student is allowed to register
to our system.
Tutors should apply to our system using the become-tutor button and then only successful tutors will then be added to our system
by the admin.
Admin can be hired by us the owners of the system and add them to the system to have all the privilleges of our system

When a student login, the system will take the student to the student portal where they going to see all the student privilleges such as book a tutor, register for a module and join the sessions, etc.

When a tutor login, the system will take the tutor to the tutor portal where he can then start the session and other things. 

Even when the admin login, the system will take the admin to the admin portal where he can do almost everything our system offers.

Please clone the connectTutor_Docs for more information.



# More about FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

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

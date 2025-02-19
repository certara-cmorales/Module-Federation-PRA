# Basic Module Federation Hello World
This example use React library as host application and Angular framework as remote application. Both application has been served using Play framework with scala.

## Build and run the project

This example contains two project: **play-scala-react** and **play-scala-angular**.

To build the clients *(React and Angular applications)* for production and run the projects:

### Angular
1. Execute `cd play-scala-angular/client` to navigate to the Angular project and execute: 
   1. `npm install` to install dependencies
   2. `npm run build`, to generate the **dist** folder
2. Execute `cd ..` to go back to **play-scala-angular** and run `sbt "run 9001"`
3. 
At this point accessing to http://localhost:9001/ should display the angular application.

### React

1. Execute `cd play-scala-react/client` to navigate to the React project and execute:
    1. `npm install` to install dependencies
    2. `npm run build`, to generate the **build** folder
2. Execute `cd ..` to go back to **play-scala-react** and run `sbt run 9000`

At this point accessing to http://localhost:9000/ should display the Angular application within the React application.

## Communication between Application

### Browser events
The comunication can be achieved using `window.dispatchEvent()` and `window.addEventListener()`.

# Cat Assignment for ABN AMRO

This is an assignment application for ABN AMRO using Angular 8. The application shows random pictures of cats and as well has the functionality to search cat images by category.

## Clone the repo

```shell
git clone https://github.com/MertTamer/CatAssignment
cd CatAssignment
```

## Install npm packages

In order to install the npm packages and serve the application, use the commands below:

```shell
npm install
npm start
```

The running application can be viewed in your browser through: http://localhost:4200/

## Build

In order to make the application production ready, use the command as shown below.

```shell
ng build --prod
```

## Architectural decisions

Angular is the framework I have the most experience with. Although it is not the most lightweight framework, the built-in features are very complete to create single page applications. If the application gets bigger in the future, Angular would be a very suited choice as well. 

In order to make the application responsive and mobile friendly, I have used Bootstrap v4. This is a framework I am really familiar with and has everything out of the box to make an application responsive.

In the future I would like separate the Dashboard component in to smaller components, but due to the time limitation I have implemented all the features in a single component. 

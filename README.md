# Simple Login SPA

[![made-with-React](https://img.shields.io/badge/Made%20with-React-blue.svg)]()
[![made-with-React Router](https://img.shields.io/badge/Made%20with-React_Router-blue.svg)]()
[![made-with-Fakerjs](https://img.shields.io/badge/Content%20Population-Faker.js-blue.svg)]()
[![made-with-Expresjs](https://img.shields.io/badge/Made%20with-Express.js-red.svg)]()
[![made-with-JWT](https://img.shields.io/badge/Authorization%20with-JWT.js-red.svg)]()
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Javascript-green.svg)]()
[![made-with-bootstrap4](https://img.shields.io/badge/Styled%20with-Bootstrap-red.svg)]()
[![made-with-Contenxt API](https://img.shields.io/badge/State%20Managment%20-Context_API-green.svg)]()

:star: If you like it, give it a star, Its a motivation booster!!

## Table of contents

- [Description](#description)
  - [React Framework](#react-framework)
  - [React Router](#react-router)
  - [Faker](#faker)
  - [Bootstrap](#bootstrap)
  - [Express](#express)
  - [Axios](#axios)
  - [Json Web Token](#Json-Web-Token)
- [Implementation](#implementation)
- [Instalation](#instalation)
- [Execution](#execution)

## Description

This application is a basic example of a login page with form validation capabilities. After a correct login proccedure the application displays a home page that presents a table populated with random users. The users content is derived from the faker.js moodule. The user is authorized via json web token and express.js. All the required HTTP requests were made with axios module.

The implementation modules that were used are listed below:

1. React Framework | create-react-app
2. React Router | react-router-dom
3. Faker | faker.js
4. Bootstrap | bootstrap CDN
5. Express
6. Axios | HTTP requests
7. JWT | Json Web Token

### React Framework

**Repository:** [https://github.com/facebook/react](https://github.com/facebook/react)

**Website:** [https://reactjs.org/](https://reactjs.org/)

React is a JavaScript library for building user interfaces. It is an easy and fast solution to develop SPAs with small to mid level complexity. Furthermore `create-react-app` saves time from the initialization proccess. I used React because I am very comfortable with it and it provides flexibility in the selection of the modules that you want to use.

The state managment solution I used here is Context API. I believe it is very helpfull to be able to provide child components the state that they need to consume without the boilerplate of Redux.

### React Router

**Repository:** [https://github.com/ReactTraining/react-router#readme](https://github.com/ReactTraining/react-router#readme)

**Website:** [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)

React Router was used in order to easy navigate to apps endpoints. The `useHistory` and `useLocation` hooks where used in order to navigate and validate endpoints.

### Faker

**Repository:** [https://github.com/marak/Faker.js/](https://github.com/marak/Faker.js/)

**Website:** [https://fakercloud.com/api](https://fakercloud.com/api)

The faker library was used in order to populate the application with content. The methods that were used are:

- `faker.datatype.number`
- `faker.name.firstName`
- `faker.name.lastName`
- `faker.date.past`

### Bootstrap

**Repository:** [https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)

**Website:** [https://getbootstrap.com/](https://getbootstrap.com/)

Bootstrap is one of the most popular HTML, CSS and Javascript library. It helps speed up the design proccess and provides responsive capabilities.

In the current application, I used the cached version of Bootstrap’s compiled CSS and JS as it is a faster way to intergrate it.

### Express

**Repository:** [https://github.com/expressjs/express](https://github.com/expressjs/express)

**Website:** [https://expressjs.com/](https://expressjs.com/)

Express is a fast lightweight framework that helps create CRUDs easy and fairly fast.

In this application I used express as an API with various end points for user authorization reasons.

### Axios

**Repository:** [https://github.com/axios/axios](https://github.com/axios/axios)

**Website:** [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)

I used axios HTTP client because it provides an easy way to implement promise-based requests. It communicates very well with express making it a great help in the development proccess.

### Jason Web Token

**Repository:** [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

**Website:** [https://jwt.io/](https://jwt.io/)

Json Web Token is a token generator, verifycator and decoder. It helped me provide the application with encrypted data for the username.

## Implementation

The application consists of two main pages, the `Login page` and the `Home page`.

The relationship between them follows the notion that the user has to provide valid credensials (username and password) to the Login page, in order to access the Home page.

There are three major concerns for this application:

- The input fields must not be empty.
- If the user tries to access the Home page bypassig Login page the "Home page inaccessible" message is shown.
- When the user is logged in and vistis the Login page, there should be an information message regarding the login status.

In order to implement the respective components in a more debuggin friently way, we use the separation of concerns notion. This means that its component is devided in two part components, the container and presentation components. The container component handles all the logic and the presentation component shows the result.

Thus, the component repsonsible for the login page is devided into the `login container component` which is responsible for the validation of the inputs as well as the respective error messages, and the `login presentational component` which is responisible to display the form as well as the error messages.

Furthermore, the home page component is devided into the `home page container component` which is responsible for getting the correct user data, and the `home page presentational component` which is responsible for presenting them the right way.

All the above lead to the following file structure:

```
src/
  pages/
    Home.js
    HomeContainer.js
    Inaccessible.js
    Login.js
    LoginContainer.js
  index.js
  style.css
```

The Home page should present a table that contains a list of users.

In order to have a pull of users availiable we use the Faker.js library. Thus we create the usersData.js file placed in the src folder.

For state managment we used the react's Context API. `dataContext.js` component contains the structure of the state as well as the Context and Provider.

The react router boilerplate as well as the navbar are located in the `PresentantionContainer.js` conponent. The `Container.js` component handles the communication with express and retrival of username via jwt.

The `dataContext.js` file provide the entire application with the global state. The `usersData.js` holds the generated content for the table on `Home.js` page.

Finally the complete structure of the src folder is shown below:

```
src/
  components/
    Container.js
    PresentantinalContainer.js
  pages/
    Home.js
    HomeContainer.js
    Inaccessible.js
    Login.js
    LoginContainer.js
  dataContext.js
  index.js
  style.css
  usersData.js
```

## Instalation

In order to install the application localy you have to follow the steps below:

1. Aquire the applications repository either by downloading the zip file or clonning it via a terminal.
2. Navigate to the applications root folder and use the **`npm install`** command in order to install the required dependencies for the express server.
3. Navigate to the client folder and again use the **`npm install`** command in order to instll the required dependencies for the react application.

## Execution

- In a terminal window, navigate to the applications root folder and use the **`npm start`** command in order to start the server.
- Open a new terminal and navigate to the client folder. Use the **`yarn start`** or **`npm start`** command in order to start the react application

In a browser window visit the url: **`http://localhost:3000/`**.

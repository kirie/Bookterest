# Bookterest

A Pinterest style app using React/Redux/ES6/Node/Express/MongoDB/Passport.  Accesses Google's Book API to fetch books and displays them in a pinterest card style format. 

## Motivation

A demonstration of creating a full stack web application with React, ES6 and Redux on the clientside.  Also, sessionless authentication using JSON Web Tokens(JWT) and passport authenticated users running on an Express.js server. 

## Features Implemented

* Masonry(a la Pinterest) style card layout
* Sessionless Authentication with JWT
* Notifications on save/delete
* Parallax scrolling
* Carousel image slider

### Prerequisites

```
node.js
google books api key
```

Default config object location is set to config/config.js.

module.exports = {
  SECRET: 'YOUR_SECRET_STRING',
  DATABASE: 'mongodb://YOURDB',
  API_KEY: 'YOUR API_KEY STRING'
};

### Installing

```
npm install
node server/server.js
npm start
```

## Running the tests
Create ENV variables for config in travis.yml

```
npm test
```

## Built With

* [react](https://github.com/facebook/react) - View/UI
* [redux](https://github.com/reactjs/redux) - State Management
* [babel](https://github.com/babel/babel) - Transpilation From ES6
* [express](https://github.com/expressjs/express) - Node Server Framework
* [passport](http://passportjs.org/) - Node Authentication
* [webpack](https://webpack.github.io/) - Module Bundler
* [jwt-simple](https://github.com/hokaccha/node-jwt-simple) - JSON Web Tokens
* [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - Node Password/Data Hashing
* [react-router](https://github.com/ReactTraining/react-router) - Client Routing
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async Middleware
* [axios](https://github.com/mzabriskie/axios) - HTTP AJAX Client
* [mongoose](http://mongoosejs.com/) - MongoDB Tooling
* [lodash](https://lodash.com) - Utility Library
* [redux-form](https://github.com/erikras/redux-form) - Form Validation State With Redux
* [react-slick](https://github.com/akiran/react-slick) - Picture Carousel 
* [react-notification-system](https://github.com/igorprado/react-notification-system) - Notifications
* [mocha](https://github.com/mochajs/mocha) - Test framework
* [chai](https://github.com/chaijs/chai) - Test assertions

## Authors

* **Eirik Lin** - [kirie](https://github.com/kirie)

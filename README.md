# Bookterest

A Pinterest style app using React/Redux/ES6/Node/Express/MongoDB/Passport.  The lookahead search function accesses Google's Book API to fetch books and displays them in a pinterest card style format. Users can sign-up/sign-in and save/delete the books they search for.  If they have nothing to search for they can see recommendations of a curated book list in /recommendations.

## Motivation

A demonstration of creating a full stack web application with React(v15.3.2), ES6 and Redux on the client-side.  Also, sessionless authentication using JSON Web Tokens(JWT) and passport authenticated users running on an Express.js server. 


![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822814/44bcd278-9d1a-11e6-87a2-bbd9de3c6099.png "Bookterest1")
![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822952/fb83ef46-9d1a-11e6-8908-25296f064f94.png "Bookterest2")
![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822954/fd363132-9d1a-11e6-9287-41b1f792d5cb.png "Bookterest3")

## Features Implemented

* Masonry(a la Pinterest) style card layout
* Sessionless Authentication with JWT
* Lookahead search
* Notifications on save/delete
* Parallax scrolling
* Carousel image slider
* Responsive Design for small devices

### Prerequisites

```
node.js
google books api key
```

Default config object location is set to config/config.js.

```
module.exports = {
  SECRET: 'YOUR_SECRET_STRING',
  DATABASE: 'mongodb://YOURDB',
  API_KEY: 'YOUR API_KEY STRING'
};
```

### Installing

```
npm install
node server/server.js
npm start
```

## Running the tests

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
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async Middleware
* [react-router](https://github.com/ReactTraining/react-router) - Client Routing
* [axios](https://github.com/mzabriskie/axios) - HTTP AJAX Client
* [mongoose](http://mongoosejs.com/) - MongoDB Tooling
* [lodash](https://lodash.com) - Utility Library
* [redux-form](https://github.com/erikras/redux-form) - Form Validation State With Redux
* [react-slick](https://github.com/akiran/react-slick) - Picture Carousel 
* [react-notification-system](https://github.com/igorprado/react-notification-system) - Notifications
* [mocha](https://github.com/mochajs/mocha) - Test framework
* [chai](https://github.com/chaijs/chai) - Test assertions
* [bootstrap](http://getbootstrap.com/css/) - Bootstrap CSS v4 Library

## Authors

* **Eirik Lin** - [kirie](https://github.com/kirie)

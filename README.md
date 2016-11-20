# Bookterest

A Pinterest style app using React/Redux/ES6/Node/Express/MongoDB/Passport.  The lookahead search function accesses Google's Book API to fetch books and displays them in a pinterest card style format(Bootstrap v4). Users can sign-up/sign-in and save/delete the books they search for.  If they have nothing to search for they can see recommendations of a curated book list in /recommendations.


### Motivation

To demonstrate the creation of a full stack web application with React(v15.3.2), ES6 and Redux on the client-side, sessionless authentication using JSON Web Tokens(JWT) and passport authenticated users running on an Express.js server. 


![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822814/44bcd278-9d1a-11e6-87a2-bbd9de3c6099.png "Bookterest1")
![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822952/fb83ef46-9d1a-11e6-8908-25296f064f94.png "Bookterest2")
![Alt text](https://cloud.githubusercontent.com/assets/5178299/19822954/fd363132-9d1a-11e6-9287-41b1f792d5cb.png "Bookterest3")


### Features

* Masonry(a la Pinterest) style card layout
* Sessionless Authentication with JWT
* Lookahead search
* Notifications on save/delete
* Parallax scrolling
* Carousel image slider
* Responsive Design for small devices


### Prerequisites

```
Node.js
Google books api key
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

* [React](https://github.com/facebook/react) - View/UI
* [Redux](https://github.com/reactjs/redux) - State Management
* [Babel](https://github.com/babel/babel) - Transpilation From ES6
* [Express](https://github.com/expressjs/express) - Node Server Framework
* [Passport](http://passportjs.org/) - Node Authentication
* [Webpack](https://webpack.github.io/) - Module Bundler
* [Jwt-simple](https://github.com/hokaccha/node-jwt-simple) - JSON Web Tokens
* [Bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - Node Password/Data Hashing
* [Redux-thunk](https://github.com/gaearon/redux-thunk) - Async Middleware
* [React-router](https://github.com/ReactTraining/react-router) - Client Routing
* [Axios](https://github.com/mzabriskie/axios) - HTTP AJAX Client
* [Mongoose](http://mongoosejs.com/) - MongoDB Tooling
* [Lodash](https://lodash.com) - Utility Library
* [Redux-form](https://github.com/erikras/redux-form) - Form Validation State With Redux
* [React-slick](https://github.com/akiran/react-slick) - Picture Carousel 
* [React-notification-system](https://github.com/igorprado/react-notification-system) - Notifications
* [Jest](https://facebook.github.io/jest/) - Test framework
* [Enzyme](https://github.com/airbnb/enzyme) - Test Utilities
* [Chai](https://github.com/chaijs/chai) - Test assertions
* [Mocha](https://github.com/mochajs/mocha) - Test framework
* [Bootstrap](http://getbootstrap.com/css/) - Bootstrap CSS v4 Library


## Author

* **Eirik Lin** - [kirie](https://github.com/kirie)

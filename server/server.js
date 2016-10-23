const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const config = require('../config/config');

// db setup
mongoose.connect(config.database);

// config
const port = process.env.PORT || 3090;
const app = express();

// app setup middleware
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false })); // string or array
app.use(morgan('dev'));
app.use(cors());
router(app);

// server setup
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server running on port ', port);
});

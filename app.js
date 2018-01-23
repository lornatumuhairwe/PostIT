const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');

const compiler = webpack(config);


dotenv.load();

const users = require('./server/routes/index');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// require('./server/routes')(app);

app.use(bodyParser.json());
app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', users);

if (process.env.NODE_ENV !== 'test') {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));
}

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));
app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

module.exports = app.listen(port);


const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(morgan('dev'));
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
}

app.use(express.static('public'));

app.use('/api/v1', routes);

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Server listening on ${(app.get('port'))}`);
  });
}

module.exports = app;

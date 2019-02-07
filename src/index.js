const cors = require('cors');
const express = require('express');
const moment = require('moment');

const config = require('../config');
const app = express();

const db = require('./database');
const { NotFoundError } = require('./error');

app.set('port', config.port);

app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${req.method} ${req.originalUrl}`)
  next();
});

app.post('/item', function(req, res, next) {
  const { name, start, end } = req.body;
  db.ItemService.create(name, start, end)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.put('/item/:id', function(req, res, next) {
  const { id } = req.params;
  db.ItemService.updateEnd(id, req.body.end)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err instanceof NotFoundError) {
        res.status(404).json({
          error: err.message
        })
      }
      else {
        throw new Error('unknown error');
      }
    })
    .catch(next);
});

app.get('/', function(req, res, next) {
  req.hello = 'szia';
  next('route');
}, function(req, res, next) {
  res.json({
    hello: req.hello
  });
});

app.get('/', function(req, res, next) {
  req.hello = 'hola';
  res.json({
    hello: req.hello
  });
});

app.use(function(err, req, res, next) {
  if (err instanceof NotFoundError) {
    res.status(404);
  }
  else {
    console.log(err.stack);
    res.status(500);
  }

  res.json({
    error: err.message
  });
});

app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('HELLOR', err);
  }

  return console.log(`Server listening on port ${app.get('port')}`);
});

process.on('uncaughtException', function(err) {
  process.exit(1);
});
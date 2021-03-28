const express = require('express');

const mongoConnect = require('./util/database').mongoConnect;

const scoreRoutes = require('./routes/score');

const app = express();

app.use(express.json()); //bodyParser is deprecated, included inside express

app.use(scoreRoutes);

mongoConnect(() => {
  app.listen(8080);
});



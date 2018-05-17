const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      //missing config for db
      summonerRoutes = require('./expressRoutes/summonerRoutes');

mongoose.Promise = global.Promise;
//missing mongoose.connect with DB

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('./summoners', summonerRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(function(){
  console.log('Listening on port ' + port);
});

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      request = require('request');
      async = require('async');
      //missing config for db
      summonerRoutes = require('./expressRoutes/summonerRoutes.js');

mongoose.Promise = global.Promise;
//missing mongoose.connect with DB

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('./summoners', summonerRoutes);

app.get('/searchbyname', (req, res) => {
  let data = {};
  let api_key = '';
  let name = 'malifaux';
  let URL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + name + '?api_key=' + api_key;

  async.waterfall([
    (callback) => {
      request(URL, (err, response, body) => {
        if (!err && response.statusCode === 200) {
          var json = JSON.parse(body);
          data = json;
          // data.id = json[name].id;
          // data.name = json[name].name;
          callback(null, data);
        } else {
          console.log(err);
        }
      })
    }
  ],
(err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  res.send(data);
})
});

// app.get('/', (req, res) => {
//   res.send("YOYOYO");
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

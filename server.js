const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      request = require('request');
      async = require('async');
      extend = require('extend');
      //missing config for db
      summonerRoutes = require('./expressRoutes/summonerRoutes.js');

mongoose.Promise = global.Promise;
//missing mongoose.connect with DB

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('./summoners', summonerRoutes);

app.get('/search', (req, res) => {
  let data = {};
  let finalData = {};
  let api_key = 'RGAPI-36d29bf0-d3a1-4952-86c8-9c20ccf6ff1c';
  let name = 'malifaux';
  let accountId = '';
  let URL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + name + '?api_key=' + api_key;
  let URL2 = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + accountId + '?api_key=' + api_key;

  async.waterfall([

    (callback) => {
      request(URL, (err, response, body) => {
        if (!err && response.statusCode === 200) {
          var json = JSON.parse(body);
          data = json;


          callback(null, data);
        } else {
          console.log(err);
        }
      })
    },

    (obj, callback) => {
      accountId = obj.accountId;
      URL2 = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + accountId + '?api_key=' + api_key;
      request(URL2, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        var json = JSON.parse(body);
        extend(finalData, json, data);
        console.log(finalData);
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

  res.send(finalData);
})
});

// app.get('/', (req, res) => {
//   res.send("YOYOYO");
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

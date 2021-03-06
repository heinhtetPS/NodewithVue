require('dotenv').config({path: 'keys.env'});
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      request = require('request');
      async = require('async');
      extend = require('extend');
      serveStatic = require('serve-static');

const app = express();
app.use(express.static('public'));
app.use("/", serveStatic (path.join (__dirname, '/dist')) );
app.use(bodyParser.json());
app.use(cors());

app.get('/searchbyname', (req, res) => {
  let data = {};
  let finalData = {};
  let api_key = process.env.API_KEY;
  //req.query accesses params that come after ?
  let name = Object.keys(req.query)[0];
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
      URL2 = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + accountId + '?endIndex=20' + '&api_key=' + api_key;
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

app.get('/match', (req, res) => {
  let matchData = {};
  let api_key = process.env.API_KEY;
  let gameID = Object.keys(req.query)[0];
  let URL = 'https://na1.api.riotgames.com/lol/match/v3/matches/' + gameID + '?api_key=' + api_key;

  request(URL, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      var json = JSON.parse(body);
      matchData = json;

    } else {
      console.log(err);
    }
    res.send(matchData);
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

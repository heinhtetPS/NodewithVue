const express = require('express');
const app = express();
var itemRoutes = express.Router();

var Summoner = require('../models/Summoner');

//here, instead of doing get, add, edit and delete from DB
//we need to input commands to retrieve summoner info from LoL api

module.exports = summonerRoutes;

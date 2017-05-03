'use strict';

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonEncodedParser = bodyParser.json();

module.exports = router;

router.get('/endpoint', function(req, res) {
  console.log(req.query)
  var pid = req.query.pid;
  res.send('hello')
  //res.redirect(`https://pixel.mathtag.com/event/img?mt_id=${pid}&mt_adid=${mt_adid}`)
});





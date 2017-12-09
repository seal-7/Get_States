var express = require('express');
var router = express.Router();
var controllers = require('../controllers/api')
//Get states from ../config/environments.json
router.get('/getStates',controllers.getStatesController);

module.exports = router;
